<script setup>
const cart = useCartStore()
const mobileMenuOpen = ref(false)
const mobileServicesOpen = ref(false)

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

watch(mobileMenuOpen, (isOpen) => {
  if (import.meta.client) {
    document.body.style.overflow = isOpen ? 'hidden' : ''
  }
})
</script>

<template>
  <div>
    <!-- Top announcement bar -->
    <div class="bg-brand-teal px-4 py-2 text-center text-xs font-medium text-white sm:text-sm">
      Free delivery on orders above PKR 2000
    </div>

    <!-- Main header -->
    <header class="border-b border-slate-200 bg-white">
      <div class="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <!-- Logo -->
        <NuxtLink to="/" class="flex shrink-0 items-center">
          <img src="~/assets/common/Main-logo.png" alt="Human Care Laboratories" class="h-10 w-auto" />
        </NuxtLink>

        <!-- Nav links -->
        <nav class="hidden items-center gap-6 text-sm font-semibold text-slate-700 md:flex">
          <NuxtLink to="/" class="hover:text-brand-teal">Home</NuxtLink>
          <NuxtLink to="/about" class="hover:text-brand-teal">About Us</NuxtLink>

          <!-- Services dropdown -->
          <div class="group relative">
            <button class="flex items-center gap-1 hover:text-brand-teal">
              Services
              <IconChevronDown class="!h-4 !w-4 transition-transform duration-200 group-hover:rotate-180" />
            </button>

            <!-- Outer wrapper: padding bridges the gap so hover never breaks -->
            <div
              class="invisible absolute  top-full z-20 w-54 pt-2 opacity-0 transition duration-150 ease-out group-hover:visible group-hover:opacity-100"
            >
              <div class=" border border-slate-200 bg-white py-2 shadow-lg">
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
          <NuxtLink to="/contact" class="hover:text-brand-teal">Contact</NuxtLink>
        </nav>

        <!-- Icons -->
        <div class="flex items-center gap-4">
          <button class="text-slate-600 transition-colors hover:text-brand-navy" aria-label="Search">
            <IconSearch />
          </button>

          <NuxtLink to="/account" class="text-slate-600 transition-colors hover:text-brand-navy" aria-label="Account">
            <IconUser />
          </NuxtLink>

          <NuxtLink to="/cart" class="relative text-slate-600 transition-colors hover:text-brand-navy" aria-label="Cart">
            <IconCart />
            <span
              v-if="cart.itemCount"
              class="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-brand-teal text-[10px] text-white"
            >
              {{ cart.itemCount }}
            </span>
          </NuxtLink>

          <!-- Mobile menu toggle -->
          <button class="text-slate-600 md:hidden" aria-label="Open menu" @click="mobileMenuOpen = true">
            <IconMenu />
          </button>
        </div>
      </div>
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
            <IconClose />
          </button>
        </div>

        <nav class="flex flex-col gap-1 px-4 py-3 text-sm font-medium text-slate-700">
          <NuxtLink to="/" class="rounded-md px-2 py-2.5 hover:bg-slate-50 hover:text-brand-teal" @click="closeMobileMenu">Home</NuxtLink>
          <NuxtLink to="/about" class="rounded-md px-2 py-2.5 hover:bg-slate-50 hover:text-brand-teal" @click="closeMobileMenu">About Us</NuxtLink>

          <button class="flex items-center justify-between rounded-md px-2 py-2.5 hover:bg-slate-50" @click="mobileServicesOpen = !mobileServicesOpen">
            Services
            <IconChevronDown class="transition-transform duration-200" :class="{ 'rotate-180': mobileServicesOpen }" />
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
          <NuxtLink to="/contact" class="rounded-md px-2 py-2.5 hover:bg-slate-50 hover:text-brand-teal" @click="closeMobileMenu">Contact</NuxtLink>
        </nav>
      </div>
    </Transition>
  </div>
</template>