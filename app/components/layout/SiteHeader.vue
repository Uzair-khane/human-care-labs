<script setup>
const cart = useCartStore()
const mobileMenuOpen = ref(false)
const mobileServicesOpen = ref(false)
const searchOpen = ref(false)
const searchQuery = ref('')

const services = [
  { label: 'Contract Manufacturing', to: '/services/contract-manufacturing' },
  { label: 'Supplement Formulations', to: '/services/supplement-formulations' },
  { label: 'Private Label Manufacturing', to: '/services/private-label-manufacturing' },
  { label: 'Fast Turnaround', to: '/services/fast-turnaround' },
  { label: 'Manufacturing', to: '/services/manufacturing' },
  { label: 'For Import', to: '/services/for-import' },
  { label: 'Packaging', to: '/services/packaging' },
  { label: 'Distribution', to: '/services/distribution' }
]

function closeMobileMenu() {
  mobileMenuOpen.value = false
  mobileServicesOpen.value = false
}

function toggleSearch() {
  searchOpen.value = !searchOpen.value
}

function submitSearch() {
  if (!searchQuery.value.trim()) return
  navigateTo({ path: '/products', query: { q: searchQuery.value.trim() } })
  searchOpen.value = false
  searchQuery.value = ''
}

watch(mobileMenuOpen, (isOpen) => {
  if (import.meta.client) {
    document.body.style.overflow = isOpen ? 'hidden' : ''
  }
})
</script>

<template>
  <div>
    <!-- Top contact bar -->
    <div class="bg-[#1C4489] px-4 py-2.5 text-white">
      <div class="mx-auto flex max-w-7xl flex-col items-center gap-1.5 text-[11px] sm:flex-row sm:flex-wrap sm:justify-between sm:gap-3 sm:text-xs md:text-sm">
        <div class="flex flex-col items-center gap-1.5 xs:flex-row xs:flex-wrap xs:justify-center sm:flex-row sm:justify-start sm:gap-4">
          <a href="tel:+97144400500" class="flex items-center gap-1.5 whitespace-nowrap hover:opacity-90">
            <svg class="h-3.5 w-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h1.5a2.25 2.25 0 002.25-2.25v-1.372a1.5 1.5 0 00-1.5-1.5l-3.87.72a1.5 1.5 0 01-1.6-.75l-1.2-2.1a1.5 1.5 0 01.3-1.8l1.05-1.05a1.5 1.5 0 00.3-1.65l-1.5-3.6a1.5 1.5 0 00-1.65-.9L6.75 3A2.25 2.25 0 004.5 5.25v.75" />
            </svg>
            <span>24/7 Helpline: +971 4 440 0500</span>
          </a>
          <a href="mailto:info@humancarelabs.com" class="flex items-center gap-1.5 whitespace-nowrap hover:opacity-90">
            <svg class="h-3.5 w-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            <span>info@humancarelabs.com</span>
          </a>
        </div>

        <div class="flex items-center gap-1.5 text-center sm:text-left">
          <svg class="h-3.5 w-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
          </svg>
          <span class="hidden sm:inline">W-32 Industrial Estate Hayatabad, Peshawar, Pakistan</span>
          <span class="sm:hidden">Peshawar, Pakistan</span>
        </div>
      </div>
    </div>
    <!-- Main header -->
    <header class="relative border-b border-slate-200 bg-white">
      <div class="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <!-- Logo -->
        <NuxtLink to="/" class="flex shrink-0 items-center">
          <img src="~/assets/Common/Main-logo.png" alt="Human Care Laboratories" class="h-10 w-auto" />
        </NuxtLink>

        <!-- Nav links -->
        <nav class="hidden items-center gap-6 text-sm font-semibold text-slate-700 md:flex">
          <NuxtLink to="/" class="hover:text-brand-teal">Home</NuxtLink>
          <NuxtLink to="/about" class="hover:text-brand-teal">About Us</NuxtLink>

          <!-- Services dropdown -->
          <div class="group relative">
            <button class="flex items-center gap-1 hover:text-brand-teal">
              Services
              <svg class="!h-4 !w-4 transition-transform duration-200 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </button>

            <div
              class="invisible absolute top-full z-20 w-54 pt-2 opacity-0 transition duration-150 ease-out group-hover:visible group-hover:opacity-100"
            >
              <div class="border border-slate-200 bg-white py-2 shadow-lg">
                <NuxtLink
                  v-for="service in services"
                  :key="service.to"
                  :to="service.to"
                  class="block px-4 py-2 text-sm font-normal text-slate-700 transition-colors hover:bg-slate-50 hover:text-brand-teal"
                >
                  {{ service.label }}
                </NuxtLink>
              </div>
            </div>
          </div>

          <NuxtLink to="/products" class="hover:text-brand-teal">Products</NuxtLink>
        </nav>

        <!-- Icons + CTA -->
        <div class="flex items-center gap-4">
          <button class="text-slate-600 transition-colors hover:text-brand-navy" aria-label="Search" @click="toggleSearch">
            <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </button>

          <NuxtLink
            to="/contact"
            class="hidden items-center gap-2 rounded-full bg-brand-teal px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-teal/90 sm:flex"
          >
            <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
            </svg>
            Book Appointment
          </NuxtLink>

          <!-- Mobile menu toggle -->
          <button class="text-slate-600 md:hidden" aria-label="Open menu" @click="mobileMenuOpen = true">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Search dropdown -->
      <Transition
        enter-active-class="transition-all duration-200 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-all duration-150 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div v-if="searchOpen" class="absolute inset-x-0 top-full z-30 border-b border-slate-200 bg-white px-4 py-3 shadow-md sm:px-6">
          <form class="mx-auto flex max-w-7xl items-center gap-2" @submit.prevent="submitSearch">
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Search products..."
              autofocus
              class="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-brand-teal focus:outline-none"
            />
            <button type="submit" class="shrink-0 rounded-md bg-brand-teal px-4 py-2 text-sm font-semibold text-white hover:bg-brand-teal/90">
              Search
            </button>
            <button type="button" class="shrink-0 text-slate-500 hover:text-slate-700" aria-label="Close search" @click="toggleSearch">
              <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </form>
        </div>
      </Transition>
    </header>

    <!-- Mobile drawer: backdrop -->
    <Transition
      enter-active-class="transition-opacity duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-if="mobileMenuOpen" class="fixed inset-0 z-40 bg-black/40 md:hidden" @click="closeMobileMenu" />
    </Transition>

    <!-- Mobile drawer: sliding panel from left -->
    <Transition
      enter-active-class="transition-transform duration-300 ease-out"
      enter-from-class="-translate-x-full"
      enter-to-class="translate-x-0"
      leave-active-class="transition-transform duration-250 ease-in"
      leave-from-class="translate-x-0"
      leave-to-class="-translate-x-full"
    >
      <div
        v-if="mobileMenuOpen"
        class="fixed inset-y-0 left-0 z-50 flex w-72 max-w-[80%] flex-col overflow-y-auto bg-white shadow-xl md:hidden"
      >
        <div class="flex items-center justify-between border-b border-slate-200 px-4 py-3">
          <img src="~/assets/common/Main-logo.png" alt="Human Care Laboratories" class="h-8 w-auto" />
          <button aria-label="Close menu" class="text-slate-500 hover:text-slate-700" @click="closeMobileMenu">
            <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav class="flex flex-col gap-1 px-4 py-3 text-sm font-medium text-slate-700">
          <NuxtLink to="/" class="rounded-md px-2 py-2.5 hover:bg-slate-50 hover:text-brand-teal" @click="closeMobileMenu">Home</NuxtLink>
          <NuxtLink to="/about" class="rounded-md px-2 py-2.5 hover:bg-slate-50 hover:text-brand-teal" @click="closeMobileMenu">About Us</NuxtLink>

          <button class="flex items-center justify-between rounded-md px-2 py-2.5 hover:bg-slate-50" @click="mobileServicesOpen = !mobileServicesOpen">
            Services
            <svg class="h-4 w-4 transition-transform duration-200" :class="{ 'rotate-180': mobileServicesOpen }" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </button>

          <Transition
            enter-active-class="transition-all duration-200 ease-out"
            enter-from-class="opacity-0 max-h-0"
            enter-to-class="opacity-100 max-h-96"
            leave-active-class="transition-all duration-150 ease-in"
            leave-from-class="opacity-100 max-h-96"
            leave-to-class="opacity-0 max-h-0"
          >
            <div v-if="mobileServicesOpen" class="flex flex-col gap-1 overflow-hidden pl-4">
              <NuxtLink
                v-for="service in services"
                :key="service.to"
                :to="service.to"
                class="rounded-md px-2 py-1.5 text-slate-600 hover:bg-slate-50 hover:text-brand-teal"
                @click="closeMobileMenu"
              >
                {{ service.label }}
              </NuxtLink>
            </div>
          </Transition>

          <NuxtLink to="/products" class="rounded-md px-2 py-2.5 hover:bg-slate-50 hover:text-brand-teal" @click="closeMobileMenu">Products</NuxtLink>

          <NuxtLink
            to="/contact"
            class="mt-2 flex items-center justify-center gap-2 rounded-full bg-brand-teal px-5 py-2.5 text-sm font-semibold text-white"
            @click="closeMobileMenu"
          >
            Book Appointment
          </NuxtLink>
        </nav>
      </div>
    </Transition>
  </div>
</template>