<script setup>
defineProps({
  variant: { type: String, default: 'primary' }, // primary | secondary | ghost
  type: { type: String, default: 'button' }
})
</script>

<template>
  <button
    :type="type"
    class="inline-flex items-center justify-center rounded-lg px-4 py-2.5 text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
    :class="{
      'bg-brand-navy text-white hover:bg-slate-800': variant === 'primary',
      'bg-brand-teal text-white hover:bg-teal-600': variant === 'secondary',
      'bg-transparent text-slate-700 hover:bg-slate-100': variant === 'ghost'
    }"
  >
    <slot />
  </button>
</template>