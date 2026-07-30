<script setup>
import whoWeAre from '~/assets/whoWeAre/whoWeAre.png'
const aboutBanner = whoWeAre
</script>

<template>
  <section class="py-12 sm:py-16 bg-[#FDFDFD]">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      
      <!-- Main Card Outer Container -->
      <div class="overflow-hidden rounded-3xl bg-white shadow-xs border border-gray-100/60 lg:grid lg:grid-cols-12 lg:items-center">
        
        <!-- Left Text Content (Column 1 to 6) -->
        <div class="p-8 sm:p-12 lg:col-span-6 lg:p-16">
          
          <!-- Subtitle / Badge -->
          <span class="text-xs font-bold tracking-widest text-[#14B8A6] uppercase">
            WHO WE ARE
          </span>

          <!-- Main Heading -->
          <h2 class="mt-4 text-1xl font-bold tracking-tight text-[#004260] leading-[33.6px] sm:text-3xl lg:text-[28px] lg:leading-snug">
            Pakistan's trusted No.1 supplements & multivitamins provider
          </h2>

          <!-- Paragraph 1 -->
          <p class="mt-6 text-sm leading-relaxed text-slate-500 sm:text-base">
            We are committed to providing high-quality healthcare solutions that enhance well-being and improve lives. As a trusted pharmaceutical brand, we specialize in innovative, science-backed formulations that cater to a wide range of health needs, including cough relief, respiratory health, immunity support, and overall wellness.
          </p>

          <!-- Paragraph 2 -->
          <p class="mt-4 text-sm leading-relaxed text-slate-500 sm:text-base">
            With a strong emphasis on natural ingredients and advanced research, our products are designed to be safe, effective, and accessible to people of all ages. We believe in the power of herbal and pharmaceutical synergy, ensuring that every formulation meets the highest standards of quality, purity, and efficacy.
          </p>
        </div>

        <!-- Right Image Banner (Column 7 to 12) -->
        <div class="relative h-72 w-full overflow-hidden sm:h-96 lg:col-span-6 lg:h-full lg:min-h-[500px]">
          <img
            :src="aboutBanner"
            alt="Pakistan's trusted No.1 supplements family"
            class="h-full w-full object-cover object-center"
            loading="lazy"
          />
        </div>

      </div>

    </div>
  </section>
</template>