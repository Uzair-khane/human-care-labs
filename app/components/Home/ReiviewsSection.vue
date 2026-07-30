<script setup>
import { ref } from 'vue'

const testimonials = ref([
  {
    id: 1,
    initials: 'SJ',
    name: 'Sarah Jenkins',
    department: 'Maternity & Neonatal Care',
    rating: 5,
    quote: '"The care I received at the Maternity wing was exceptional. The NICU team was incredibly attentive, and they made our family feel completely safe and supported during a stressful delivery."'
  },
  {
    id: 2,
    initials: 'DV',
    name: 'David Vance',
    department: 'Cardiovascular Division',
    rating: 5,
    quote: '"State-of-the-art diagnostics and a truly compassionate medical team. My cardiologist explained every step of my procedure clearly. I couldn\'t have asked for better treatment."'
  },
  {
    id: 3,
    initials: 'ER',
    name: 'Elena Rostova',
    department: 'Orthopedic & Joint Center',
    rating: 5,
    quote: '"The orthopedic surgeons and physical therapy specialists got me back on my feet faster than expected. Their clinical expertise is matched only by their incredible warmth."',
    italicText: true
  }
])
</script>

<template>
  <section class="bg-[#FDFDFD] py-12 sm:py-16">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      
      <!-- Top Header Row: Title & Overall Rating Box -->
      <div class="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        
        <!-- Left Text Block -->
        <div class="max-w-2xl">
          <!-- Subtitle / Tagline Badge -->
          <div class="flex items-center gap-2">
            <svg class="h-4 w-4 text-[#0D9488]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span class="text-xs font-bold tracking-widest text-[#0D9488] uppercase">
              TRUSTED BY 20K+ CUSTOMERS ACROSS 1200+ CITIES
            </span>
          </div>

          <!-- Main Heading -->
          <h2 class="mt-3 text-3xl font-bold tracking-tight text-[#1E293B] sm:text-4xl">
            What Our Patients Say
          </h2>

          <!-- Subtext -->
          <p class="mt-3 text-sm leading-relaxed text-slate-500 sm:text-base">
            We gather verified feedback from our patients to continuously refine our care models and celebrate the medical milestones achieved together.
          </p>
        </div>

        <!-- Right Side Overall Rating Card -->
        <div class="flex items-center gap-5 rounded-2xl border border-gray-100 bg-white p-5 shadow-xs sm:p-6 lg:shrink-0">
          <div class="text-center pr-4 border-r border-gray-100">
            <span class="text-3xl font-bold text-slate-800 sm:text-4xl">4.9</span>
            <p class="mt-1 text-[10px] font-semibold uppercase tracking-wider text-slate-400">
              OUT OF 5.0
            </p>
          </div>
          <div>
            <!-- Star Icons -->
            <div class="flex items-center gap-1 text-amber-400">
              <svg v-for="i in 5" :key="i" class="h-5 w-5 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
            </div>
            <p class="mt-2 text-xs text-slate-500 font-medium">
              Based on 12,450+ verified discharge surveys
            </p>
          </div>
        </div>

      </div>

      <!-- Testimonial Cards Grid (3 Columns) -->
      <div class="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
        <div
          v-for="item in testimonials"
          :key="item.id"
          class="flex flex-col justify-between rounded-2xl border border-gray-100 bg-white p-6 sm:p-8 shadow-xs hover:shadow-md transition-shadow duration-300"
        >
          <!-- Top Row: Quote Icon & Stars -->
          <div>
            <div class="flex items-center justify-between">
              <!-- Big Green Quote Icon -->
              <span class="text-4xl font-serif leading-none text-[#99E6D8] font-bold">“</span>

              <!-- Star Rating -->
              <div class="flex items-center gap-0.5 text-amber-400">
                <svg v-for="i in item.rating" :key="i" class="h-4 w-4 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              </div>
            </div>

            <!-- Quote Text -->
            <p class="mt-4 text-sm leading-relaxed text-slate-600" :class="{ 'italic': item.italicText }">
              {{ item.quote }}
            </p>
          </div>

          <!-- Bottom Row: Author Details -->
          <div class="mt-8 flex items-center gap-3">
            <!-- Initials Avatar -->
            <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E6F4F1] text-xs font-bold text-[#0D9488]">
              {{ item.initials }}
            </div>

            <!-- Name & Department -->
            <div>
              <div class="flex items-center gap-1.5">
                <h4 class="text-sm font-bold text-slate-800">{{ item.name }}</h4>
                <!-- Green Verified Checkmark Icon -->
                <svg class="h-4 w-4 text-[#10B981]" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
              </div>
              <p class="text-xs text-slate-400 font-medium">{{ item.department }}</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>