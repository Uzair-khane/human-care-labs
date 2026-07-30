<script setup>
import IconFacebook from '~/components/icons/IconFacebook.vue'
import IconInstagram from '~/components/icons/IconInstagram.vue'
import IconYoutube from '~/components/icons/IconYoutube.vue'

const companyLinks = [
  { label: 'Home', to: '/' },
  { label: 'About us', to: '/about' },
  { label: 'Catalogue', to: '/products' },
  { label: 'Careers', to: '/careers' },
  { label: 'Contact', to: '/contact' }
]

const serviceLinks = [
  { label: 'Contract Manufacturing', to: '/services/contract-manufacturing' },
  { label: 'Private Label Manufacturing', to: '/services/private-label-manufacturing' },
  { label: 'Supplement Formulations', to: '/services/supplement-formulations' },
  { label: 'Packaging', to: '/services/packaging' },
  { label: 'For Import', to: '/services/for-import' }
]

const quickLinks = [
  { label: 'FAQ', to: '/faq' },
  { label: 'Shipping', to: '/shipping' },
  { label: 'Terms', to: '/terms' },
  { label: 'Privacy Policy', to: '/privacy-policy' },
  { label: 'Health Blog', to: '/blog' }
]
</script>

<template>
  <footer class="bg-[#F8F9FA] text-[#4A5568] border-t border-gray-100 font-sans">
    <div class="mx-auto max-w-7xl px-6 pt-16 pb-12 sm:px-8 lg:px-12">
      <!-- Grid Layout -->
      <div class="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-[1.8fr_1fr_1.2fr_1fr]">
        
        <!-- Column 1: Logo, Bio & Socials -->
        <div>
          <NuxtLink to="/" class="inline-block">
            <img 
              src="~/assets/Common/Main-logo.png" 
              alt="Human Care Laboratories" 
              class="h-10 w-auto" 
            />
          </NuxtLink>

          <p class="mt-5 max-w-sm text-xs sm:text-sm leading-relaxed text-slate-500">
            Human Care Laboratories focuses on providing high quality healthcare solutions to improve lives. With innovation and reliability, we aim to meet diverse health and wellness needs.
          </p>

          <!-- Light Circle Social Icons (Using components directly from icons folder) -->
          <div class="mt-6 flex items-center gap-2.5">
            <a
              href="https://facebook.com"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
              class="flex h-8 w-8 items-center justify-center rounded-full bg-[#E2E8F0]/70 text-slate-600 transition-colors hover:bg-slate-300 hover:text-slate-900"
            >
              <IconFacebook class="!h-3.5 !w-3.5 fill-current" />
            </a>

            <a
              href="https://instagram.com"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
              class="flex h-8 w-8 items-center justify-center rounded-full bg-[#E2E8F0]/70 text-slate-600 transition-colors hover:bg-slate-300 hover:text-slate-900"
            >
              <IconInstagram class="!h-3.5 !w-3.5 fill-current" />
            </a>

            <a
              href="https://youtube.com"
              aria-label="YouTube"
              target="_blank"
              rel="noopener noreferrer"
              class="flex h-8 w-8 items-center justify-center rounded-full bg-[#E2E8F0]/70 text-slate-600 transition-colors hover:bg-slate-300 hover:text-slate-900"
            >
              <IconYoutube class="!h-3.5 !w-3.5 fill-current" />
            </a>
          </div>
        </div>

        <!-- Column 2: Company -->
        <div>
          <h3 class="text-sm font-bold text-slate-800">
            Company
          </h3>
          <ul class="mt-4 space-y-2.5 text-xs sm:text-sm">
            <li v-for="link in companyLinks" :key="link.to">
              <NuxtLink :to="link.to" class="text-slate-500 transition-colors hover:text-slate-900">
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Column 3: Services -->
        <div>
          <h3 class="text-sm font-bold text-slate-800">
            Services
          </h3>
          <ul class="mt-4 space-y-2.5 text-xs sm:text-sm">
            <li v-for="link in serviceLinks" :key="link.to">
              <NuxtLink :to="link.to" class="text-slate-500 transition-colors hover:text-slate-900">
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Column 4: Quick Links -->
        <div>
          <h3 class="text-sm font-bold text-slate-800">
            Quick Links
          </h3>
          <ul class="mt-4 space-y-2.5 text-xs sm:text-sm">
            <li v-for="link in quickLinks" :key="link.to">
              <NuxtLink :to="link.to" class="text-slate-500 transition-colors hover:text-slate-900">
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

      </div>

      <!-- Bottom Bar Divider Line -->
      <div class="mt-12 border-t border-slate-200/60 pt-6">
        <div class="flex flex-col items-center justify-between gap-3 text-xs text-slate-400 sm:flex-row">
          <!-- Left Copyright -->
          <p>&copy; {{ new Date().getFullYear() }} Human Care Laboratories. All Rights Reserved.</p>

          <!-- Right Credit Tag -->
          <p class="flex items-center gap-1.5 text-slate-500">
            <svg class="h-3.5 w-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
            <span>Website & SEO work by</span>
            <a 
              href="#" 
              target="_blank" 
              class="font-medium text-slate-600 underline underline-offset-2 transition-colors hover:text-slate-900"
            >
              Fast Grow More
            </a>
          </p>
        </div>
      </div>

    </div>
  </footer>
</template>