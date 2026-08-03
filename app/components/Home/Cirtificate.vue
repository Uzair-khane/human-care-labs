<template>
  <section class="bg-[#f4f6f9] py-12 overflow-hidden">
    <!-- Section Title Area -->
    <div class="container mx-auto px-4 text-center mb-8">
      <h2 class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#111827] tracking-tight">
        Our Certifications & Licenses
      </h2>

      <!-- Decorative Divider -->
      <div class="flex items-center justify-center gap-2 mt-3">
        <div class="h-[1px] w-12 bg-gray-300"></div>
        <div class="h-2 w-2 rounded-full bg-gray-300"></div>
        <div class="h-[1px] w-12 bg-gray-300"></div>
      </div>
    </div>

    <!-- Infinite Auto-Scrolling Slider -->
    <div class="relative w-full overflow-hidden flex [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
      
      <!-- Track 1 (Original List) -->
      <div class="flex items-center space-x-12 sm:space-x-16 animate-marquee whitespace-nowrap shrink-0 pr-12 sm:pr-16">
        <div 
          v-for="(partner, index) in partners" 
          :key="`p1-${index}`"
          class="flex items-center justify-center h-20 w-28 sm:w-36 transition-transform duration-300 hover:scale-105"
        >
          <img 
            :src="partner.logo" 
            :alt="partner.name" 
            class="max-h-full max-w-full object-contain"
            loading="lazy"
          />
        </div>
      </div>

      <!-- Track 2 (Duplicate List for Seamless Loop) -->
      <div class="flex items-center space-x-12 sm:space-x-16 animate-marquee whitespace-nowrap shrink-0 aria-hidden:true pr-12 sm:pr-16">
        <div 
          v-for="(partner, index) in partners" 
          :key="`p2-${index}`"
          class="flex items-center justify-center h-20 w-28 sm:w-36 transition-transform duration-300 hover:scale-105"
        >
          <img 
            :src="partner.logo" 
            :alt="partner.name" 
            class="max-h-full max-w-full object-contain"
            loading="lazy"
          />
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
// Asset imports for Nuxt 3 / Vue
import logo2 from '~/assets/cirtificate/logo-2.png'
import logo3 from '~/assets/cirtificate/logo-3.png'
import logo4 from '~/assets/cirtificate/logo-4.png'
import logo5 from '~/assets/cirtificate/logo-5.png'
import logo6 from '~/assets/cirtificate/logo-6.png'
import logo7 from '~/assets/cirtificate/logo-7.png'

const partners = [
  { name: 'Certificate Logo 2', logo: logo2 },
  { name: 'Certificate Logo 3', logo: logo3 },
  { name: 'Certificate Logo 4', logo: logo4 },
  { name: 'Certificate Logo 5', logo: logo5 },
  { name: 'Certificate Logo 6', logo: logo6 },
  { name: 'Certificate Logo 7', logo: logo7 },
]
</script>

<style scoped>
@keyframes marquee {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.animate-marquee {
  animation: marquee 25s linear infinite;
}

/* Hover par continuous movement pause karne ke liye */
.relative:hover .animate-marquee {
  animation-play-state: paused;
}
</style>