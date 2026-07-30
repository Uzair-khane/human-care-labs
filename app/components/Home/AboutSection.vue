<script setup>
// Categories component ki tarah same clean asset imports
import doctorWoman from '~/assets/Common/about/doctor-woman.png'
import careHands from '~/assets/Common/about/care-hands.png'
import physicalTherapy from '~/assets/Common/about/physical-therapy.png'
import familyCare from '~/assets/Common/about/family-care.png'

const aboutData = ref({
  tagline: "ABOUT US",
  title: "Nature-Inspired Health,\nBacked by Science",
  description: "Human Care Laboratories is a nutraceutical company based in Peshawar, committed to improving health through nature-inspired solutions. We maintain high standards by using premium ingredients and applying strict quality control throughout our processes. Through continuous scientific research and innovation, we develop safe, reliable, and effective formulations that prioritize customer health and well-being.",
  buttonText: "Explore More",
  buttonLink: "/about",
  
  // Dynamic images array (API update ke liye ready)
  images: [
    { id: 1, src: doctorWoman, alt: "Healthcare Professional", class: "h-48 sm:h-56 lg:h-60" },
    { id: 2, src: careHands, alt: "Patient Care", class: "h-56 sm:h-64 lg:h-72" },
    { id: 3, src: physicalTherapy, alt: "Physical Therapy Session", class: "h-56 sm:h-64 lg:h-72" },
    { id: 4, src: familyCare, alt: "Happy Family", class: "h-48 sm:h-56 lg:h-60" }
  ]
})
</script>

<template>
  <section class="bg-[#F8F9F8] py-16 sm:py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        
        <!-- Left Side: Image Collage Grid (Dynamic Loop) -->
        <div class="grid grid-cols-2 gap-4 sm:gap-6">
          <!-- Column 1 (Left Column Images) -->
          <div class="flex flex-col gap-4 sm:gap-6">
            <div 
              v-for="img in aboutData.images.slice(0, 2)" 
              :key="img.id"
              class="overflow-hidden rounded-2xl shadow-sm"
            >
              <img
                :src="img.src"
                :alt="img.alt"
                :class="['w-full object-cover transition-transform duration-300 hover:scale-105', img.class]"
                loading="lazy"
              />
            </div>
          </div>

          <!-- Column 2 (Right Column Images - Staggered Height) -->
          <div class="flex flex-col gap-4 sm:gap-6">
            <div 
              v-for="img in aboutData.images.slice(2, 4)" 
              :key="img.id"
              class="overflow-hidden rounded-2xl shadow-sm"
            >
              <img
                :src="img.src"
                :alt="img.alt"
                :class="['w-full object-cover transition-transform duration-300 hover:scale-105', img.class]"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <!-- Right Side: Content -->
        <div class="flex flex-col items-start space-y-5">
          <!-- Category Tag -->
          <span class="text-xs font-bold uppercase tracking-wider text-[#14B8A6]">
            {{ aboutData.tagline }}
          </span>

          <!-- Main Heading -->
          <h2 class="whitespace-pre-line text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
            {{ aboutData.title }}
          </h2>

          <!-- Description Text -->
          <p class="text-base leading-relaxed text-slate-600 sm:text-lg">
            {{ aboutData.description }}
          </p>

          <!-- Action Button -->
          <div class="pt-3">
            <NuxtLink
              :to="aboutData.buttonLink"
              class="inline-flex items-center gap-2.5 rounded-lg bg-[#1E429F] px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-[#1A3888] focus:outline-none focus:ring-2 focus:ring-[#1E429F] focus:ring-offset-2"
            >
              <span>{{ aboutData.buttonText }}</span>
              <svg 
                class="h-4 w-4 fill-current" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M21 4H3a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zm-1 14H4V6h16v12zm-9-2h2v-2h-2v2zm0-4h2V8h-2v4z"/>
              </svg>
            </NuxtLink>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>