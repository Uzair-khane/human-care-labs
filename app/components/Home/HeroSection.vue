<script setup>
import {
  nextTick,
  onBeforeUnmount,
  onMounted,
  ref,
} from 'vue'

import storyVideo from '../../assets/Common/hero.mp4'

// ── Frame sequence ────────────────────────────────────────────
const modules = import.meta.glob(
  '../../assets/heroframe/**/*.webp',
  {
    eager: true,
    query: '?url',
    import: 'default',
  },
)

const frames = Object.entries(modules)
  .sort(([a], [b]) =>
    a.localeCompare(b, undefined, { numeric: true }),
  )
  .map(([, url]) => url)
  .filter((url) => typeof url === 'string')

const section = ref(null)
const stage = ref(null)
const media = ref(null)
const canvas = ref(null)
const headline = ref(null)

const dialog = ref(null)
const player = ref(null)
const storyButton = ref(null)

const progress = ref(0)
const ready = ref(false)
const reducedMotion = ref(false)

const errorMessage = ref(
  frames.length
    ? ''
    : 'Frames missing: app/assets/heroframe.',
)

// ── Animated text ─────────────────────────────────────────────
const headlineText = [
  'Care, crafted',
  'with purpose.',
]

let letterIndex = 0

const headlineLines = headlineText.map((text) =>
  text.split(' ').map((word) =>
    [...word].map((character) => ({
      character,
      index: letterIndex++,
    })),
  ),
)

const desktopParagraph =
  'Discover our product range and explore formulation, manufacturing, and private-label services for your next project.'

const mobileParagraph =
  'Explore our products, formulations, and manufacturing services.'

function splitParagraph(text) {
  let offset = 0

  return text.split(' ').map((word) => {
    const characters = [...word].map((character) => ({
      character,
      index: offset++,
    }))

    offset++ // Space between words.
    return characters
  })
}

const desktopWords = splitParagraph(desktopParagraph)
const mobileWords = splitParagraph(mobileParagraph)

// Text remains readable during SSR / without JavaScript.
const textStarted = ref(false)
const visibleCharacters = ref(desktopParagraph.length)

let typingDelay
let typingInterval
let textAnimations = []
let foldElements = []

function stopTextTimers() {
  clearTimeout(typingDelay)
  clearInterval(typingInterval)
}

function resetHover() {
  for (const element of foldElements) {
    element.style.setProperty('--hover-angle', '0deg')
  }
}

function onHeadlinePointer(event) {
  if (
    reducedMotion.value ||
    event.pointerType !== 'mouse'
  ) {
    return
  }

  for (const element of foldElements) {
    const rect = element.getBoundingClientRect()

    const distance = Math.hypot(
      event.clientX - (rect.left + rect.width / 2),
      event.clientY - (rect.top + rect.height / 2),
    )

    const strength = Math.max(0, 1 - distance / 140)

    element.style.setProperty(
      '--hover-angle',
      `${-45 * strength}deg`,
    )
  }
}

function showAllText() {
  stopTextTimers()

  for (const animation of textAnimations) {
    animation.cancel()
  }

  textAnimations = []
  visibleCharacters.value = desktopParagraph.length
  resetHover()
}

function startTextAnimation() {
  if (destroyed || !headline.value) return

  textStarted.value = true

  foldElements = [
    ...headline.value.querySelectorAll('[data-fold-letter]'),
  ]

  if (reducedMotion.value) {
    showAllText()
    return
  }

  visibleCharacters.value = 0

  textAnimations = foldElements.map((element, index) =>
    element.animate(
      [
        {
          opacity: 0,
          transform: 'perspective(700px) rotateX(-92deg)',
          filter: 'brightness(0.55)',
        },
        {
          opacity: 1,
          transform: 'perspective(700px) rotateX(0deg)',
          filter: 'brightness(1)',
        },
      ],
      {
        duration: 650,
        delay: index * 45,
        easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
        fill: 'backwards',
      },
    ),
  )

  typingDelay = setTimeout(() => {
    if (destroyed || reducedMotion.value) return

    typingInterval = setInterval(() => {
      visibleCharacters.value = Math.min(
        desktopParagraph.length,
        visibleCharacters.value + 1,
      )

      if (
        visibleCharacters.value >= desktopParagraph.length
      ) {
        clearInterval(typingInterval)
      }
    }, 22)
  }, 1050)
}

// ── Frame loading ────────────────────────────────────────────
const MAX_CACHE = 48
const MAX_LOADS = 3

const cache = new Map()
const pending = new Map()
const failed = new Set()

let queue = []
let activeLoads = 0
let targetIndex = 0
let displayedIndex = -1
let displayedImage = null

let ctx
let width = 0
let height = 0
let raf = 0
let destroyed = false
let needsPaint = true

let observer
let motionQuery

function trimCache() {
  const removable = [...cache.keys()]
    .filter((index) => index !== displayedIndex)
    .sort(
      (a, b) =>
        Math.abs(b - targetIndex) -
        Math.abs(a - targetIndex),
    )

  while (cache.size > MAX_CACHE && removable.length) {
    cache.delete(removable.shift())
  }
}

function pumpQueue() {
  if (destroyed) return

  while (activeLoads < MAX_LOADS && queue.length) {
    const index = queue.shift()
    const url = frames[index]

    if (
      !url ||
      cache.has(index) ||
      pending.has(index) ||
      failed.has(index)
    ) {
      continue
    }

    activeLoads++

    const image = new Image()
    image.decoding = 'async'
    pending.set(index, image)

    let finished = false

    function complete(success) {
      if (finished) return
      finished = true

      image.onload = null
      image.onerror = null

      pending.delete(index)
      activeLoads--

      if (destroyed) return

      if (success) {
        cache.set(index, image)
        errorMessage.value = ''
        trimCache()
        schedule()
      } else {
        failed.add(index)

        if (!ready.value && index === targetIndex) {
          errorMessage.value =
            'A frame could not load. Check the WebP files.'
        }
      }

      pumpQueue()
    }

    image.onload = async () => {
      try {
        await image.decode()
      } catch {
        // Use a successfully loaded image if dimensions are valid.
      }

      complete(
        image.naturalWidth > 0 &&
        image.naturalHeight > 0,
      )
    }

    image.onerror = () => complete(false)
    image.src = url
  }
}

function requestFrames() {
  if (!frames.length || destroyed) return

  const wanted = new Set()

  function add(index) {
    if (index >= 0 && index < frames.length) {
      wanted.add(index)
    }
  }

  add(targetIndex)

  if (!reducedMotion.value) {
    for (let distance = 1; distance <= 16; distance++) {
      add(targetIndex + distance)
      add(targetIndex - distance)
    }
  }

  queue = [...wanted].filter(
    (index) =>
      !cache.has(index) &&
      !pending.has(index) &&
      !failed.has(index),
  )

  pumpQueue()
}

// ── Canvas rendering: one opaque frame at a time ──────────────
function paint(image) {
  if (!ctx || !image?.naturalWidth || !width || !height) {
    return false
  }

  const sourceWidth = image.naturalWidth
  const sourceHeight = image.naturalHeight

  const scale = Math.min(
    width / sourceWidth,
    height / sourceHeight,
  )

  const drawnWidth = sourceWidth * scale
  const drawnHeight = sourceHeight * scale

  const mobile = window.innerWidth < 1024

  const x = mobile
    ? Math.max(0, (width - drawnWidth) / 2)
    : Math.max(0, width - drawnWidth)

  const y = Math.max(0, (height - drawnHeight) / 2)

  ctx.globalAlpha = 1
  ctx.globalCompositeOperation = 'source-over'
  ctx.fillStyle = '#eaf5fa'
  ctx.fillRect(0, 0, width, height)

  // Extend background without stretching the actual products.
  ctx.drawImage(
    image, 2, 0, 2, sourceHeight,
    0, 0, width, height,
  )

  if (x > 0) {
    ctx.drawImage(
      image, 2, 0, 2, sourceHeight,
      0, y, x + 1, drawnHeight,
    )
  }

  const right = x + drawnWidth

  if (right < width) {
    ctx.drawImage(
      image, sourceWidth - 3, 0, 2, sourceHeight,
      right - 1, y, width - right + 1, drawnHeight,
    )
  }

  if (y > 0) {
    ctx.drawImage(
      image, 0, 1, sourceWidth, 2,
      x, 0, drawnWidth, y + 1,
    )
  }

  const bottom = y + drawnHeight

  if (bottom < height) {
    ctx.drawImage(
      image, 0, sourceHeight - 3, sourceWidth, 2,
      x, bottom - 1, drawnWidth, height - bottom + 1,
    )
  }

  ctx.drawImage(image, x, y, drawnWidth, drawnHeight)

  return true
}

function draw() {
  if (!ctx || !frames.length) return

  const requestedImage = cache.get(targetIndex)

  if (requestedImage) {
    if (displayedIndex !== targetIndex || needsPaint) {
      if (paint(requestedImage)) {
        displayedImage = requestedImage
        displayedIndex = targetIndex
        needsPaint = false
        ready.value = true
      }
    }

    return
  }

  // Keep the previous frame visible until the requested one is ready.
  if (needsPaint && displayedImage) {
    if (paint(displayedImage)) needsPaint = false
  }
}

function updateProgress() {
  if (!section.value || !stage.value || !frames.length) {
    return
  }

  if (reducedMotion.value) {
    progress.value = 1
    targetIndex = frames.length - 1
  } else {
    const scrollY = window.scrollY
    const rect = section.value.getBoundingClientRect()
    const sectionTop = rect.top + scrollY
    const stageHeight = stage.value.getBoundingClientRect().height

    const headerHeight =
      parseFloat(getComputedStyle(stage.value).top) || 0

    const naturalStart = Math.max(
      0,
      sectionTop - headerHeight,
    )

    const start =
      sectionTop <= window.innerHeight ? 0 : naturalStart

    const end = Math.max(
      start + 1,
      sectionTop + rect.height - stageHeight - headerHeight,
    )

    progress.value = Math.max(
      0,
      Math.min(1, (scrollY - start) / (end - start)),
    )

    targetIndex = Math.round(
      progress.value * (frames.length - 1),
    )
  }

  requestFrames()
}

function schedule() {
  if (destroyed || raf) return

  raf = requestAnimationFrame(() => {
    raf = 0
    updateProgress()
    draw()
  })
}

function resizeCanvas() {
  if (!canvas.value || !media.value || destroyed) return

  const rect = media.value.getBoundingClientRect()
  if (!rect.width || !rect.height) return

  const dpr = Math.min(window.devicePixelRatio || 1, 2)
  const nextWidth = Math.max(1, Math.round(rect.width * dpr))
  const nextHeight = Math.max(1, Math.round(rect.height * dpr))

  width = rect.width
  height = rect.height

  if (
    !ctx ||
    canvas.value.width !== nextWidth ||
    canvas.value.height !== nextHeight
  ) {
    canvas.value.width = nextWidth
    canvas.value.height = nextHeight

    ctx = canvas.value.getContext('2d')

    if (ctx) {
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      ctx.imageSmoothingEnabled = true
      ctx.imageSmoothingQuality = 'high'
      needsPaint = true

      if (displayedImage && paint(displayedImage)) {
        needsPaint = false
      }
    }
  }

  schedule()
}

async function onMotionChange() {
  reducedMotion.value = Boolean(motionQuery?.matches)

  if (reducedMotion.value) showAllText()

  await nextTick()
  if (!destroyed) resizeCanvas()
}

// ── Story modal ───────────────────────────────────────────────
function openStory() {
  if (!dialog.value || dialog.value.open) return

  dialog.value.showModal()
  player.value?.play().catch(() => {})
}

function closeStory() {
  dialog.value?.close()
}

function onStoryClosed() {
  player.value?.pause()

  if (!destroyed) {
    storyButton.value?.focus({ preventScroll: true })
  }
}

function onDialogClick(event) {
  const element = dialog.value
  if (!element || event.target !== element) return

  const rect = element.getBoundingClientRect()

  if (
    event.clientX < rect.left ||
    event.clientX > rect.right ||
    event.clientY < rect.top ||
    event.clientY > rect.bottom
  ) {
    closeStory()
  }
}

// ── Lifecycle ─────────────────────────────────────────────────
onMounted(async () => {
  motionQuery = window.matchMedia(
    '(prefers-reduced-motion: reduce)',
  )

  reducedMotion.value = motionQuery.matches
  motionQuery.addEventListener('change', onMotionChange)

  await nextTick()
  if (destroyed) return

  startTextAnimation()

  observer = new ResizeObserver(resizeCanvas)
  if (media.value) observer.observe(media.value)

  window.addEventListener('scroll', schedule, { passive: true })
  window.addEventListener('resize', resizeCanvas, { passive: true })

  resizeCanvas()
})

onBeforeUnmount(() => {
  destroyed = true

  cancelAnimationFrame(raf)
  observer?.disconnect()
  stopTextTimers()

  for (const animation of textAnimations) animation.cancel()

  window.removeEventListener('scroll', schedule)
  window.removeEventListener('resize', resizeCanvas)
  motionQuery?.removeEventListener('change', onMotionChange)

  player.value?.pause()
  dialog.value?.close()

  for (const image of pending.values()) {
    image.onload = null
    image.onerror = null
    image.removeAttribute('src')
  }

  pending.clear()
  cache.clear()

  displayedImage = null
  queue = []
  foldElements = []
  textAnimations = []
})
</script>

<template>
  <section
    ref="section"
    aria-label="Human Care Laboratories"
    class="relative w-full bg-[#eaf5fa] [--hero-header-height:96px] lg:[--hero-header-height:114px]"
    :class="reducedMotion ? 'h-auto' : 'h-[240svh]'"
  >
    <div
      ref="stage"
      class="top-[var(--hero-header-height)] isolate h-[calc(100svh-var(--hero-header-height))] w-full overflow-hidden bg-[#eaf5fa]"
      :class="reducedMotion ? 'relative' : 'sticky'"
    >
      <!-- Product frames -->
      <div
        ref="media"
        class="absolute inset-x-0 bottom-9 top-[49%] overflow-hidden sm:top-[43%] lg:inset-0"
        aria-hidden="true"
      >
        <canvas
          ref="canvas"
          class="absolute inset-0 block h-full w-full"
        />
      </div>

      <div
        aria-hidden="true"
        class="pointer-events-none absolute inset-0 hidden bg-gradient-to-r from-[#edf7fc]/90 via-transparent to-transparent lg:block"
      />

      <!-- Hero content -->
      <div
        class="relative z-10 mx-auto flex h-[49%] w-full max-w-[1560px] items-center px-6 py-3 sm:h-[43%] sm:px-10 sm:py-5 lg:h-full lg:px-14 lg:py-14 xl:px-20"
      >
        <div
          class="mx-auto w-full max-w-[560px] text-center lg:mx-0 lg:w-[39%] lg:max-w-[490px] lg:text-left"
        >
          <div
            class="flex items-center justify-center gap-2.5 lg:justify-start"
          >
            <span
              aria-hidden="true"
              class="h-px w-5 bg-[#087f78]/70 sm:w-7"
            />

            <span
              class="font-sans text-[8px] font-semibold uppercase tracking-[0.18em] text-[#087f78] sm:text-[10px] xl:text-[11px]"
            >
              Human Care Laboratories
            </span>
          </div>

          <!-- Fold heading -->
          <h1
            ref="headline"
            class="mt-3 font-serif text-[clamp(1.7rem,4.8svh,2.75rem)] font-semibold leading-[1.04] tracking-[-0.04em] text-[#193b68] sm:mt-4 lg:text-[clamp(2.7rem,4.3vw,4.6rem)]"
            @pointermove="onHeadlinePointer"
            @pointerleave="resetHover"
          >
            <span class="sr-only">
              Care, crafted with purpose.
            </span>

            <span aria-hidden="true">
              <span
                v-for="(line, lineIndex) in headlineLines"
                :key="lineIndex"
                class="block"
                :class="lineIndex === 1 ? 'text-[#078c83]' : ''"
              >
                <template
                  v-for="(word, wordIndex) in line"
                  :key="wordIndex"
                >
                  <span class="inline-block whitespace-nowrap">
                    <span
                      v-for="letter in word"
                      :key="letter.index"
                      data-fold-letter
                      class="hero-fold-letter"
                    >
                      <span class="hero-fold-hover">
                        {{ letter.character }}
                      </span>
                    </span>
                  </span>

                  <span v-if="wordIndex < line.length - 1">
                    {{ ' ' }}
                  </span>
                </template>
              </span>
            </span>
          </h1>

          <!-- Mobile typing paragraph -->
          <p
            class="mx-auto mt-3 max-w-[320px] font-sans text-[12px] leading-[1.6] text-[#465e73] sm:max-w-[400px] sm:text-sm lg:hidden"
          >
            <span class="sr-only">{{ mobileParagraph }}</span>

            <span aria-hidden="true">
              <template
                v-for="(word, wordIndex) in mobileWords"
                :key="wordIndex"
              >
                <span class="inline-block whitespace-nowrap">
                  <span
                    v-for="letter in word"
                    :key="letter.index"
                    :class="{
                      'invisible':
                        textStarted &&
                        !reducedMotion &&
                        letter.index >= visibleCharacters,
                    }"
                  >{{ letter.character }}</span>
                </span>

                <span v-if="wordIndex < mobileWords.length - 1">
                  {{ ' ' }}
                </span>
              </template>
            </span>
          </p>

          <!-- Desktop typing paragraph -->
          <p
            class="mt-5 hidden max-w-[420px] font-sans text-sm leading-7 text-[#465e73] lg:block xl:text-base"
          >
            <span class="sr-only">{{ desktopParagraph }}</span>

            <span aria-hidden="true">
              <template
                v-for="(word, wordIndex) in desktopWords"
                :key="wordIndex"
              >
                <span class="inline-block whitespace-nowrap">
                  <span
                    v-for="letter in word"
                    :key="letter.index"
                    :class="{
                      'invisible':
                        textStarted &&
                        !reducedMotion &&
                        letter.index >= visibleCharacters,
                    }"
                  >{{ letter.character }}</span>
                </span>

                <span v-if="wordIndex < desktopWords.length - 1">
                  {{ ' ' }}
                </span>
              </template>
            </span>
          </p>

          <!-- Actions -->
          <div
            class="mt-4 flex flex-wrap items-center justify-center gap-2.5 sm:mt-5 lg:mt-7 lg:justify-start lg:gap-3"
          >
            <NuxtLink
              to="/services/manufacturing"
              class="group inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#087f78] px-5 py-2.5 font-sans text-[11px] font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#06665f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#087f78] motion-reduce:transform-none motion-reduce:transition-none sm:px-6 sm:text-xs xl:min-h-12 xl:text-sm"
            >
              Our Services

              <svg
                aria-hidden="true"
                class="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transform-none"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.8"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4 12h16m-6-6 6 6-6 6"
                />
              </svg>
            </NuxtLink>

            <button
              ref="storyButton"
              type="button"
              class="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-[#193b68]/20 bg-white/70 px-4 py-2.5 font-sans text-[11px] font-semibold text-[#193b68] transition duration-300 hover:border-[#087f78] hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#087f78] sm:px-5 sm:text-xs xl:min-h-12 xl:text-sm"
              @click="openStory"
            >
              <svg
                aria-hidden="true"
                class="h-3 w-3"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="m8 5 11 7-11 7V5Z" />
              </svg>

              Watch Story
            </button>
          </div>
        </div>
      </div>

      <p
        v-if="!ready && !errorMessage"
        role="status"
        class="absolute inset-x-0 bottom-[25%] z-20 text-center font-sans text-xs text-[#465e73] lg:inset-x-auto lg:bottom-auto lg:right-6 lg:top-6"
      >
        Loading product view…
      </p>

      <p
        v-if="errorMessage"
        role="status"
        class="absolute inset-x-5 bottom-12 z-30 mx-auto max-w-lg rounded-lg border border-red-200 bg-white p-3 text-center font-sans text-xs text-red-700"
      >
        {{ errorMessage }}
      </p>

      <!-- Scroll progress -->
      <div
        v-if="!reducedMotion"
        aria-hidden="true"
        class="pointer-events-none absolute inset-x-0 bottom-0 z-20 mx-auto flex h-9 w-full max-w-[1560px] items-center justify-between px-6 sm:px-10 lg:bottom-3 lg:h-10 lg:px-14 xl:px-20"
      >
        <span
          class="flex items-center gap-2 font-sans text-[8px] font-semibold uppercase tracking-[0.17em] text-[#36546c] sm:text-[9px]"
        >
          <svg
            class="h-3.5 w-3.5 text-[#087f78]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 4v16m-5-5 5 5 5-5"
            />
          </svg>

          Scroll to discover
        </span>

        <div class="flex items-center gap-3">
          <div
            class="h-px w-16 overflow-hidden bg-[#193b68]/20 sm:w-24 lg:w-28"
          >
            <div
              class="h-full origin-left bg-[#087f78]"
              :style="{ transform: `scaleX(${progress})` }"
            />
          </div>

          <span
            class="w-8 text-right font-sans text-[9px] tabular-nums text-[#36546c]"
          >
            {{ Math.round(progress * 100) }}%
          </span>
        </div>
      </div>
    </div>

    <!-- Story modal -->
    <Teleport to="body">
      <dialog
        ref="dialog"
        aria-label="Human Care Laboratories video"
        class="fixed inset-0 m-auto w-[92vw] max-w-4xl rounded-2xl border border-white/20 bg-[#10243d] p-3 text-white shadow-2xl backdrop:bg-black/75 backdrop:backdrop-blur-sm sm:p-4"
        @click="onDialogClick"
        @close="onStoryClosed"
      >
        <div class="mb-3 flex items-center justify-between gap-4">
          <p class="font-sans text-xs sm:text-sm">
            Human Care Laboratories
          </p>

          <button
            type="button"
            autofocus
            aria-label="Close video"
            class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-xl hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
            @click="closeStory"
          >
            ×
          </button>
        </div>

        <video
          ref="player"
          :src="storyVideo"
          controls
          playsinline
          preload="none"
          class="max-h-[75svh] w-full rounded-lg bg-black"
        />
      </dialog>
    </Teleport>
  </section>
</template>

<style scoped>
.hero-fold-letter {
  display: inline-block;
  transform-origin: 50% 0%;
  backface-visibility: hidden;
}

.hero-fold-hover {
  display: inline-block;
  transform-origin: 50% 0%;
  backface-visibility: hidden;
  transform: perspective(700px) rotateX(var(--hover-angle, 0deg));
  transition: transform 450ms cubic-bezier(0.215, 0.61, 0.355, 1);
}

@media (prefers-reduced-motion: reduce) {
  .hero-fold-letter,
  .hero-fold-hover {
    animation: none !important;
    transition: none !important;
    transform: none !important;
    filter: none !important;
    opacity: 1 !important;
  }
}
</style>