<script setup>
import mensHealth from '~/assets/Common/categories/men_health-2.png'
import nutrisports from '~/assets/Common/categories/nutrisports.jpeg'
import multivitamins from '~/assets/Common/categories/multivitamins_1.jpeg'
import fertilitySupport from '~/assets/Common/categories/fertility_support.jpeg'
import kidsTeensHealth from '~/assets/Common/categories/kids&teens_health.jpeg'
import bonesJoints from '~/assets/Common/categories/bones&joints.jpeg'
import stressSleep from '~/assets/Common/categories/stress&sleep.png'
import weightManagement from '~/assets/Common/categories/weight_management.png'
import immuneSupport from '~/assets/Common/categories/immune_support.jpeg'
import brainNerves from '~/assets/Common/categories/brain&nerves.png'
import muscleSupport from '~/assets/Common/categories/muscle_support.jpeg'
import bloodSugarSupport from '~/assets/Common/categories/blood_suger_support.jpeg'
import heartHealth from '~/assets/Common/categories/heart_support.jpeg'
import visionSupport from '~/assets/Common/categories/vision_support.jpeg'
import gutHealth from '~/assets/Common/categories/gut_health.jpeg'
import herbalHealth from '~/assets/Common/categories/herbal_health.jpeg'
import womensHealth from '~/assets/Common/categories/womens-health.png'
import babyMilk from '~/assets/Common/categories/baby-milk.png'

const categories = [
  { name: "Men's Health", image: mensHealth, to: '/categories/mens-health' },
  { name: "Women's Health", image: womensHealth, to: '/categories/womens-health' },
  { name: 'NutriSports', image: nutrisports, to: '/categories/nutrisports' },
  { name: 'Multivitamins', image: multivitamins, to: '/categories/multivitamins' },
  { name: 'Fertility Support', image: fertilitySupport, to: '/categories/fertility-support' },
  { name: "Kids' & Teens' Health", image: kidsTeensHealth, to: '/categories/kids-teens-health' },
  { name: 'Bones & Joints', image: bonesJoints, to: '/categories/bones-joints' },
  { name: 'Stress & Sleep', image: stressSleep, to: '/categories/stress-sleep' },
  { name: 'Weight Management', image: weightManagement, to: '/categories/weight-management' },
  { name: 'Immune Support', image: immuneSupport, to: '/categories/immune-support' },
  { name: 'Brain & Nerves', image: brainNerves, to: '/categories/brain-nerves' },
  { name: 'Muscle Support', image: muscleSupport, to: '/categories/muscle-support' },
  { name: 'Blood Sugar Support', image: bloodSugarSupport, to: '/categories/blood-sugar-support' },
  { name: 'Heart Health', image: heartHealth, to: '/categories/heart-health' },
  { name: 'Vision Support', image: visionSupport, to: '/categories/vision-support' },
  { name: 'Gut Health', image: gutHealth, to: '/categories/gut-health' },
  { name: 'Herbal Health', image: herbalHealth, to: '/categories/herbal-health' },
  { name: 'Baby Milk', image: babyMilk, to: '/categories/baby-milk' }
]

const INITIAL_COUNT = 8
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

    <!-- Grid -->
    <TransitionGroup
      tag="div"
      class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:gap-6"
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
        class="group flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white p-1.5 shadow-sm transition-all duration-300 hover:shadow-md"
      >
        <!-- Aspect ratio set to portrait (3:4) to match Figma design -->
        <div class="relative aspect-[3/4] w-full overflow-hidden rounded-lg bg-gray-50">
          <img
            v-if="category.image"
            :src="category.image"
            :alt="category.name"
            class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
          <div v-else class="flex h-full w-full items-center justify-center p-2 text-center text-xs text-gray-400">
            Image coming soon
          </div>
        </div>

        <!-- Title section -->
        <div class="flex items-center justify-center py-3">
          <span class="text-center text-sm font-semibold text-gray-900 group-hover:text-black">
            {{ category.name }}
          </span>
        </div>
      </NuxtLink>
    </TransitionGroup>
  </section>
</template>