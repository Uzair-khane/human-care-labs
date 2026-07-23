<script setup>
import BeautyImg from '~/assets/common/categories/Beauty.png'
import WomenHealthImg from '~/assets/common/categories/WomenHealthCare.png'
// import MaleFertilityImg from '~/assets/common/categories/MaleFertility.png'
import ImmunityBoosterImg from '~/assets/common/categories/ImmunityBooster.png'
import KidsHealthImg from '~/assets/common/categories/KidsHealth.png'
import BoneJointImg from '~/assets/common/categories/BoneandJointSupport.png'
import GutHealthImg from '~/assets/common/categories/GutHealth.png'

const categories = [
  { label: 'Beauty & Skincare', image: BeautyImg, to: '/products?category=beauty-skincare' },
  { label: 'Women Health Care', image: WomenHealthImg, to: '/products?category=women-health' },
  { label: 'Male Fertility', image: GutHealthImg, to: '/products?category=male-fertility' },
  { label: 'Immunity Booster', image: ImmunityBoosterImg, to: '/products?category=immunity-booster' },
  { label: "Kid's Health", image: KidsHealthImg, to: '/products?category=kids-health' },
  { label: 'Bone & Joint Support', image: BoneJointImg, to: '/products?category=bone-joint' },
  { label: 'Gut Health', image: GutHealthImg, to: '/products?category=gut-health' }
]
</script>

<template>
  <section class="border-b border-slate-200 bg-white py-6">
    <div class="mx-auto max-w-7xl px-4 sm:px-6">
      <div class="flex gap-6 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:justify-between sm:gap-4 sm:overflow-visible">
        <NuxtLink
          v-for="(cat, index) in categories"
          :key="cat.label"
          :to="cat.to"
          class="category-item group flex shrink-0 flex-col items-center gap-2 text-center"
          :style="{ animationDelay: `${index * 80}ms` }"
        >
          <span
            class="flex h-20 w-20 items-center justify-center overflow-hidden rounded-full border-2 border-brand-teal/70 shadow-sm transition-all duration-300 ease-out group-hover:scale-110 group-hover:border-brand-teal group-hover:shadow-lg group-active:scale-95 sm:h-24 sm:w-24"
          >
            <img
              :src="cat.image"
              :alt="cat.label"
              class="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
            />
          </span>
          <span
            class="w-24 text-xs font-medium leading-tight text-slate-700 transition-colors duration-200 group-hover:text-brand-teal sm:text-sm"
          >
            {{ cat.label }}
          </span>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.category-item {
  opacity: 0;
  animation: category-fade-up 0.5s ease-out forwards;
}

@keyframes category-fade-up {
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .category-item {
    animation: none;
    opacity: 1;
  }
}
</style>