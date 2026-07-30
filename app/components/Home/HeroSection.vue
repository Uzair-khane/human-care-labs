<script setup>
import hero1 from '~/assets/Common/hero.mp4'
import hero2 from '~/assets/Common/hero.mp4'
import hero3 from '~/assets/Common/hero.mp4'
import hero4 from '~/assets/Common/hero.mp4'
import hero5 from '~/assets/Common/hero.mp4'

const slides = [
  {
    videoSrc: hero1,
    tag: 'Advanced Maternity Care',
    title: 'Bringing New Life Into the World, Safely',
    description: 'State-of-the-art NICU facilities and expert maternal care teams ensure every birth is a celebration.',
    primaryLabel: 'Maternity Services',
    primaryTo: '/services/maternity',
    secondaryLabel: 'Watch Story'
  },
  {
    videoSrc: hero2,
    tag: 'Contract Manufacturing',
    title: 'Precision Manufacturing You Can Trust',
    description: 'GMP-certified facilities delivering consistent quality for every batch, every time.',
    primaryLabel: 'Our Services',
    primaryTo: '/services/manufacturing',
    secondaryLabel: 'Watch Story'
  },
  {
    videoSrc: hero1,
    tag: 'Supplement Formulations',
    title: 'Science-Backed Formulations, Built for You',
    description: 'From concept to capsule, our R&D team brings your formulation vision to life.',
    primaryLabel: 'Explore Formulations',
    primaryTo: '/services/supplement-formulations',
    secondaryLabel: 'Watch Story'
  },
  {
    videoSrc: hero4,
    tag: 'Private Label Manufacturing',
    title: 'Your Brand, Our Expertise',
    description: 'Launch your own product line with full private label support, start to finish.',
    primaryLabel: 'Start Your Brand',
    primaryTo: '/services/private-label-manufacturing',
    secondaryLabel: 'Watch Story'
  },
  {
    videoSrc: hero5,
    tag: 'Fast Turnaround',
    title: 'Speed Without Compromising Quality',
    description: 'Streamlined production timelines that get your products to market faster.',
    primaryLabel: 'Learn More',
    primaryTo: '/services/fast-turnaround',
    secondaryLabel: 'Watch Story'
  }
]

const activeSlide = ref(0)
const direction = ref('next')

function nextSlide() {
  direction.value = 'next'
  activeSlide.value = (activeSlide.value + 1) % slides.length
  restartAutoplay()
}

function prevSlide() {
  direction.value = 'prev'
  activeSlide.value = (activeSlide.value - 1 + slides.length) % slides.length
  restartAutoplay()
}

function goToSlide(index) {
  direction.value = index > activeSlide.value ? 'next' : 'prev'
  activeSlide.value = index
  restartAutoplay()
}

const watchStoryOpen = ref(false)

function openWatchStory() {
  watchStoryOpen.value = true
}

function closeWatchStory() {
  watchStoryOpen.value = false
}

// Keep all videos mounted; play only the active one, pause the rest
const videoRefs = ref([])

function setVideoRef(el, index) {
  if (el) videoRefs.value[index] = el
}

function syncVideos() {
  videoRefs.value.forEach((el, index) => {
    if (!el) return
    if (index === activeSlide.value) {
      el.currentTime = 0
      el.play().catch(() => {})
    } else {
      el.pause()
    }
  })
}

watch(activeSlide, () => {
  syncVideos()
})

onMounted(() => {
  syncVideos()
  startAutoplay()
})

// Auto-advance
let autoplayTimer = null

function startAutoplay() {
  autoplayTimer = setInterval(() => {
    direction.value = 'next'
    activeSlide.value = (activeSlide.value + 1) % slides.length
  }, 7000)
}

function stopAutoplay() {
  if (autoplayTimer) {
    clearInterval(autoplayTimer)
    autoplayTimer = null
  }
}

function restartAutoplay() {
  stopAutoplay()
  startAutoplay()
}

onUnmounted(() => {
  stopAutoplay()
})
</script>

<template>
  <section
    class="relative h-[500px] w-full overflow-hidden sm:h-[550px] md:h-[620px]"
    @mouseenter="stopAutoplay"
    @mouseleave="startAutoplay"
  >
    <!-- All videos stay mounted; only opacity toggles for a true crossfade -->
    <video
      v-for="(slide, index) in slides"
      :key="index"
      :ref="(el) => setVideoRef(el, index)"
      class="absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-in-out"
      :class="index === activeSlide ? 'opacity-100 z-0' : 'opacity-0 z-0'"
      :src="slide.videoSrc"
      muted
      loop
      playsinline
      preload="auto"
    />

    <!-- Dark overlay for text contrast -->
    <div class="absolute inset-0 z-[1] bg-black/40" />

    <!-- Content -->
    <div class="relative -mt-4 ml-12 z-10 flex h-full items-center">
      <div class="mx-auto w-full max-w-7xl px-6 sm:px-6">
        <Transition :name="direction === 'next' ? 'slide-next' : 'slide-prev'" mode="out-in">
          <div :key="activeSlide" class="max-w-xl text-white">
            <span class="inline-block  rounded-full bg-white/15 px-3 py-1 text-xs font-sans font-semibold uppercase tracking-wide backdrop-blur-sm">
              {{ slides[activeSlide].tag }}
            </span>

            <h1 class="mt-4 tracking-[0.06em] font-serif text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              {{ slides[activeSlide].title }}
            </h1>

            <p class="mt-4 font-sans text-sm text-white/90 sm:text-base">
              {{ slides[activeSlide].description }}
            </p>

            <div class="mt-6 flex flex-wrap items-center gap-3">
              <NuxtLink
                :to="slides[activeSlide].primaryTo"
                class="flex items-center gap-2 rounded-full bg-brand-teal px-6 py-3 text-sm font-sans font-semibold text-white transition-colors hover:bg-brand-teal/90"
              >
                {{ slides[activeSlide].primaryLabel }}
                <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </NuxtLink>

              <button
                class="flex items-center gap-2 rounded-full bg-white/20 px-6 py-3 text-sm font-sans font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/30"
                @click="openWatchStory"
              >
                <span class="flex h-6 w-6 items-center justify-center rounded-full bg-white text-brand-navy">
                  <svg class="h-3 w-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
                {{ slides[activeSlide].secondaryLabel }}
              </button>
            </div>
          </div>
        </Transition>
      </div>
    </div>

    <!-- Prev / Next arrows -->
    <button
      class="absolute left-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-colors hover:bg-white/30 sm:left-6"
      aria-label="Previous slide"
      @click="prevSlide"
    >
      <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
      </svg>
    </button>

    <button
      class="absolute right-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-colors hover:bg-white/30 sm:right-6"
      aria-label="Next slide"
      @click="nextSlide"
    >
      <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
      </svg>
    </button>

    <!-- Pagination dots -->
    <div class="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
      <button
        v-for="(slide, index) in slides"
        :key="index"
        class="h-2 rounded-full transition-all duration-300"
        :class="index === activeSlide ? 'w-6 bg-white' : 'w-2 bg-white/50'"
        :aria-label="`Go to slide ${index + 1}`"
        @click="goToSlide(index)"
      />
    </div>

    <!-- Watch Story modal -->
    <Transition
      enter-active-class="transition-opacity duration-200 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-150 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="watchStoryOpen"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
        @click.self="closeWatchStory"
      >
        <div class="relative w-full max-w-3xl">
          <button
            class="absolute -top-10 right-0 text-white hover:opacity-80"
            aria-label="Close video"
            @click="closeWatchStory"
          >
            <svg class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <video class="w-full rounded-lg" :src="slides[activeSlide].videoSrc" controls autoplay />
        </div>
      </div>
    </Transition>
  </section>
</template>

<style scoped>
.slide-next-enter-active,
.slide-next-leave-active,
.slide-prev-enter-active,
.slide-prev-leave-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
}

.slide-next-enter-from {
  opacity: 0;
  transform: translateX(24px);
}
.slide-next-leave-to {
  opacity: 0;
  transform: translateX(-24px);
}

.slide-prev-enter-from {
  opacity: 0;
  transform: translateX(-24px);
}
.slide-prev-leave-to {
  opacity: 0;
  transform: translateX(24px);
}
</style>