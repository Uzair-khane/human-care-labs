<script setup>
const stats = [
  {
    icon: 'building',
    value: '1400+',
    label: 'Professionals',
    paths: [
      'M3 21h18M5 21V3h10v18M15 9h4v12',
      'M8 7h4M8 11h4M8 15h4',
    ],
  },
  {
    icon: 'pulse',
    value: '128',
    label: 'Clinics',
    paths: [
      'M3 12h3l2.25-6L12 18l2.25-9L16 12h5',
    ],
  },
  {
    icon: 'pill',
    value: '345+',
    label: 'Pharmacies',
    paths: [
      'M4.93 19.07a5 5 0 010-7.07l7.07-7.07a5 5 0 117.07 7.07l-7.07 7.07a5 5 0 01-7.07 0z',
      'M9.5 8.5l6 6',
    ],
  },
  {
    icon: 'users',
    value: '20M+',
    label: 'Patients Served',
    paths: [
      'M15 19.5v-1.5a4 4 0 00-4-4H6a4 4 0 00-4 4v1.5',
      'M17.5 19.5v-1.5a4 4 0 00-3-3.87',
      'M13 4.13a4 4 0 010 7.75',
      'M8 8a3 3 0 100-6 3 3 0 000 6z',
    ],
  },
  {
    icon: 'heart',
    value: '18+',
    label: 'Years of Care',
    paths: [
      'M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z',
    ],
  },
]
</script>

<template>
  <section
    class="stats-marquee relative w-full overflow-hidden bg-[#1C4489] py-6"
    aria-label="Human Care Laboratories statistics"
    tabindex="0"
  >
    <div class="stats-marquee__track flex w-full">
      <!-- Two identical groups make the loop seamless. -->
      <div
        v-for="copy in 2"
        :key="copy"
        class="stats-marquee__group flex min-w-full shrink-0"
        :aria-hidden="copy === 2 ? 'true' : undefined"
      >
        <div
          v-for="stat in stats"
          :key="`${copy}-${stat.icon}`"
          class="flex w-[170px] shrink-0 flex-col items-center gap-2 border-r border-white/20 px-5 text-center text-white sm:w-[200px] lg:flex-1"
        >
          <svg
            aria-hidden="true"
            class="h-6 w-6 shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="1.5"
          >
            <path
              v-for="(path, index) in stat.paths"
              :key="index"
              :d="path"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <span
            class="mt-1 whitespace-nowrap font-serif text-2xl font-bold sm:text-3xl"
          >
            {{ stat.value }}
          </span>

          <span
            class="whitespace-nowrap font-sans text-xs text-white/80 sm:text-sm"
          >
            {{ stat.label }}
          </span>
        </div>
      </div>
    </div>

    <!-- Subtle edge fades matching the original background -->
    <div
      aria-hidden="true"
      class="pointer-events-none absolute inset-y-0 left-0 w-6 bg-gradient-to-r from-[#1C4489] to-transparent sm:w-12"
    />

    <div
      aria-hidden="true"
      class="pointer-events-none absolute inset-y-0 right-0 w-6 bg-gradient-to-l from-[#1C4489] to-transparent sm:w-12"
    />
  </section>
</template>

<style scoped>
.stats-marquee {
  --marquee-duration: 30s;
}

.stats-marquee__group {
  animation: stats-loop var(--marquee-duration) linear infinite;
  will-change: transform;
}

.stats-marquee:hover .stats-marquee__group,
.stats-marquee:focus-within .stats-marquee__group {
  animation-play-state: paused;
}

.stats-marquee:focus-visible {
  outline: 2px solid #ffffff;
  outline-offset: -4px;
}

@keyframes stats-loop {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-100%);
  }
}

@media (prefers-reduced-motion: reduce) {
  .stats-marquee__group {
    animation: none;
    transform: none;
    will-change: auto;
    min-width: 0;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    row-gap: 24px;
  }

  .stats-marquee__group > div {
    width: auto;
    border-right: none;
  }

  .stats-marquee__group[aria-hidden='true'] {
    display: none;
  }
}

@media (prefers-reduced-motion: reduce) and (min-width: 768px) {
  .stats-marquee__group {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
}
</style>