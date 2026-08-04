<script setup>
import mensHealth from '~/assets/Common/categories/men_health-2.png'
import nutrisports from '~/assets/Common/categories/nutrisports.jpeg'
import multivitamins from '~/assets/Common/categories/multivitamins_1.jpeg'
import fertilitySupport from '~/assets/Common/categories/fertility_support.jpeg'
import kidsTeensHealth from '~/assets/Common/categories/kids-teens-health.png'
import bonesJoints from '~/assets/Common/categories/bones-joints.png'
import stressSleep from '~/assets/Common/categories/stress&sleep.png'
import weightManagement from '~/assets/Common/categories/weight_management.png'
import immuneSupport from '~/assets/Common/categories/immune_support.jpeg'
import brainNerves from '~/assets/Common/categories/brain-nerves.png'
import muscleSupport from '~/assets/Common/categories/muscle_support.jpeg'
import bloodSugarSupport from '~/assets/Common/categories/blood_suger_support.jpeg'
import heartHealth from '~/assets/Common/categories/heart_support.jpeg'
import visionSupport from '~/assets/Common/categories/vision_support.jpeg'
import gutHealth from '~/assets/Common/categories/gut-health.png'
import herbalHealth from '~/assets/Common/categories/herbal-health.png'
import womensHealth from '~/assets/Common/categories/womens-health.png'
import babyMilk from '~/assets/Common/categories/baby-milk.png'
import coughCold from '~/assets/Common/categories/cold.png'

const categories = [
  { name: 'Gut Health', image: gutHealth, to: '/categories/gut-health' },
  { name: 'Gut Health', image: coughCold, to: '/categories/cold' },
  { name: 'Bones & Joints', image: bonesJoints, to: '/categories/bones-joints' },
  { name: 'Brain & Nerves', image: brainNerves, to: '/categories/brain-nerves' },
  { name: "Women's Health", image: womensHealth, to: '/categories/womens-health' },
  { name: "Kids' & Teens' Health", image: kidsTeensHealth, to: '/categories/kids-teens-health' },
  { name: 'Herbal Health', image: herbalHealth, to: '/categories/herbal-health' },
 
]

const INITIAL_COUNT = 7
const showAll = ref(false)

const visibleCategories = computed(() =>
  showAll.value ? categories : categories.slice(0, INITIAL_COUNT)
)

function toggleShowAll() {
  showAll.value = !showAll.value
}
</script>

<template>
  <section class="mx-auto max-w-7xl px-4 py-10 sm:px-6">
    <!-- Header -->
    <div class="mb-6 flex items-center justify-between">
      <h2 class="text-xl font-bold text-gray-900 sm:text-2xl">Health Categories</h2>
      <button
        class="flex items-center gap-1.5 text-xs font-semibold text-gray-800 transition-colors hover:text-gray-600 sm:text-sm"
        @click="toggleShowAll"
      >
        {{ showAll ? 'Show Less' : 'View All' }}
        <svg
          class="h-4 w-4 transition-transform duration-300"
          :class="{ 'rotate-90': showAll }"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
        </svg>
      </button>
    </div>

    <!-- Grid Container -->
    <TransitionGroup
      tag="div"
      class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 xl:gap-4"
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200 ease-in absolute"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <NuxtLink
        v-for="category in visibleCategories"
        :key="category.to"
        :to="category.to"
        class="group flex flex-col overflow-hidden rounded-t-md rounded-b-[5px] bg-[#FAFBFB] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
      >
        <div class="relative w-full bg-[#eceee8]">
          <!-- Aspect Ratio Image Box -->
          <div class="relative aspect-[4/6] w-full overflow-hidden rounded-t-[5px] bg-gray-200">
            <img
              v-if="category.image"
              :src="category.image"
              :alt="category.name"
              class="h-full w-full  object-top transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
            <div v-else class="flex h-full w-full items-center justify-center p-3 text-center text-xs text-gray-400">
              Image coming soon
            </div>

            <div class="pointer-events-none absolute inset-2.5 rounded-[12px] z-10"></div>
          </div>
        </div>

        <div class="flex items-center justify-center bg-[#FAFBFB] py-3 px-2">
          <span class="text-center text-[15px] font-bold text-gray-900 transition-colors group-hover:text-black">
            {{ category.name }}
          </span>
        </div>
      </NuxtLink>
    </TransitionGroup>
  </section>
</template>