<script setup>
useSeoMeta({
  title: 'Human Care Laboratories — Precision Manufacturing'
})
</script>

<template>
  <section class="bg-brand-navy px-6 py-24 text-white">
    <div class="mx-auto max-w-3xl text-center">
      <h1 class="text-4xl font-bold sm:text-5xl">Precision Manufacturing for Peak Performance</h1>
      <p class="mt-4 text-slate-300">
        Research-driven, GMP-certified nutraceutical manufacturing from our Peshawar facility.
      </p>
      <div class="mt-8 flex justify-center gap-4">
        <UButton variant="secondary">
          <NuxtLink to="/products">Shop Products</NuxtLink>
        </UButton>
        <UButton variant="ghost" class="!text-white">
          <NuxtLink to="/wholesale/apply">Request Wholesale Pricing</NuxtLink>
        </UButton>
      </div>
    </div>
  </section>
</template>