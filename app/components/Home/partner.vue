<script setup>
// Features Grid Data Array
const features = ref([
  {
    id: 1,
    title: 'Drop shipping',
    // Shipping Box Icon
    iconPath: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4'
  },
  {
    id: 2,
    title: 'Label Designing',
    // Clipboard / Edit Icon
    iconPath: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01'
  },
  {
    id: 3,
    title: 'Private Label Manufacturing',
    // Test Tube / Flask Icon
    iconPath: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L5.6 15.12a2 2 0 00-1.022.547l-1.05 1.05a2 2 0 00.585 3.275l.444.197a10 10 0 007.886 0l.444-.197a2 2 0 00.585-3.275l-1.05-1.05z'
  },
  {
    id: 4,
    title: 'Packaging',
    // Box Package Icon
    iconPath: 'M5 8h14M5 8a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v1a2 2 0 01-2 2M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4'
  },
  {
    id: 5,
    title: 'Fast Turnaround',
    // Speed Globe Icon
    iconPath: 'M13 10V3L4 14h7v7l9-11h-7z'
  },
  {
    id: 6,
    title: 'Private Label Services',
    // Printer / Stamp Icon
    iconPath: 'M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z'
  },
  {
    id: 7,
    title: 'Nutraceuticals',
    // Science Flask Icon
    iconPath: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L5.6 15.12a2 2 0 00-1.022.547l-1.05 1.05a2 2 0 00.585 3.275l.444.197a10 10 0 007.886 0l.444-.197a2 2 0 00.585-3.275l-1.05-1.05z'
  },
  {
    id: 8,
    title: 'Contract Manufacturing',
    // Document Contract Icon
    iconPath: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
  }
])
</script>

<template>
  <section class="bg-[#FDFDFD] py-16 sm:py-24">
    <div class="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
      
      <!-- Subtitle Badge -->
      <span class="text-xs font-bold tracking-widest text-[#14B8A6] uppercase">
        OUR LABORATORY, YOUR BRAND'S SUCCESS.
      </span>

      <!-- Main Heading -->
      <h2 class="mt-3 text-2xl font-bold tracking-tight text-slate-800 sm:text-3xl lg:text-4xl">
        Your Trusted Partner in Custom Vitamin and Supplement Manufacturing
      </h2>

      <!-- Description Text -->
      <div class="mx-auto mt-6 max-w-4xl space-y-4 text-sm leading-relaxed text-slate-500 sm:text-base">
        <p>
          Are you ready to launch your own supplement brand? Or are you looking to take your existing business to the next level? Either way, Human Care Laboratories is here to support you every step of the way.
        </p>
        <p>
          Founded in 2018, Human Care Laboratories has become a trusted source for high-quality vitamin and supplement manufacturing, backed by a proven track record of success. We are committed to delivering premium supplement manufacturing at competitive prices, along with unparalleled service and support.
        </p>
      </div>

      <!-- 8 Feature Cards Grid -->
      <div class="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 lg:gap-5">
        <div
          v-for="item in features"
          :key="item.id"
          class="group flex flex-col items-center justify-center rounded-2xl bg-[#F0FDFA]/70 p-6 transition-all duration-300 hover:bg-[#E6F4F1] hover:shadow-xs"
        >
          <!-- Teal Icon Circle -->
          <div class="flex h-12 w-12 items-center justify-center rounded-full bg-[#0D9488] text-white shadow-xs transition-transform duration-300 group-hover:scale-110">
            <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" :d="item.iconPath" />
            </svg>
          </div>

          <!-- Feature Title -->
          <h3 class="mt-4 text-sm font-bold text-slate-800">
            {{ item.title }}
          </h3>
        </div>
      </div>

    </div>
  </section>
</template>