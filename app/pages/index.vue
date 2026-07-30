<script setup>
import AboutSection from '~/components/Home/AboutSection.vue';
import Categories from '~/components/Home/Categories.vue';
import HeroSection from '~/components/Home/HeroSection.vue';
import Partner from '~/components/Home/partner.vue';
import ProductSection from '~/components/Home/ProductSection.vue';
import ReiviewsSection from '~/components/Home/ReiviewsSection.vue';
import StatesSection from '~/components/Home/StatesSection.vue';
import WhoWeAre from '~/components/Home/WhoWeAre.vue';

useSeoMeta({
  title: 'Human Care Laboratories — Precision Manufacturing'
})
</script>

<template>
 <div>
  <HeroSection />
 </div>
 <div>
  <StatesSection/>
 </div>
 <div>
  <Categories/>
 </div>
<div>
  <AboutSection/>
</div>
<div>
  <ProductSection/>
</div>
<div>
  <WhoWeAre/>
</div>
<div>
  <Partner/>
</div>
<div>
  <ReiviewsSection/>
</div>
</template>