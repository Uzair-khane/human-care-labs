<script setup>
const stats = [
  {
    icon: 'building',
    value: '1400+',
    label: 'Professionals'
  },
  {
    icon: 'pulse',
    value: '128',
    label: 'Clinics'
  },
  {
    icon: 'pill',
    value: '345+',
    label: 'Pharmacies'
  },
  {
    icon: 'users',
    value: '20M+',
    label: 'Patients Served'
  },
  {
    icon: 'heart',
    value: '18+',
    label: 'Years of Care'
  }
]
</script>

<template>
  <section class="bg-[#1C4489] px-4 py-6 sm:px-6">
    <div class="mx-auto grid max-w-7xl grid-cols-2 gap-y-6 sm:grid-cols-3 md:grid-cols-5 md:divide-x md:divide-white/20">
      <div
        v-for="(stat, index) in stats"
        :key="index"
        class="flex flex-col items-center gap-2 px-4 text-center text-white"
      >
        <!-- Icon -->
        <svg v-if="stat.icon === 'building'" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 21h16.5M4.5 3h9a1.5 1.5 0 011.5 1.5V21H4.5V4.5A1.5 1.5 0 016 3zM15 21v-9a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5V21M8.25 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6h1.5m-1.5 3h1.5m-1.5 3h1.5" />
        </svg>

        <svg v-else-if="stat.icon === 'pulse'" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 12h3l2.25-6L12 18l2.25-9L16 12h5" />
        </svg>

        <svg v-else-if="stat.icon === 'pill'" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4.93 19.07a5 5 0 010-7.07l7.07-7.07a5 5 0 117.07 7.07l-7.07 7.07a5 5 0 01-7.07 0z" />
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.5 8.5l6 6" />
        </svg>

        <svg v-else-if="stat.icon === 'users'" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.5v-1.5a4 4 0 00-4-4H6a4 4 0 00-4 4v1.5M17.5 19.5v-1.5a4 4 0 00-3-3.87M13 4.13a4 4 0 010 7.75M8 8a3 3 0 100-6 3 3 0 000 6z" />
        </svg>

        <svg v-else-if="stat.icon === 'heart'" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>

        <span class="mt-1 font-serif text-2xl font-bold sm:text-3xl">{{ stat.value }}</span>
        <span class="text-xs font-sans text-white/80 sm:text-sm">{{ stat.label }}</span>
      </div>
    </div>
  </section>
</template>