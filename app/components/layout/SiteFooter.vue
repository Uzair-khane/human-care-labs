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
  { label: 'Manufacturing', to: '/services/manufacturing' },
  { label: 'For Import', to: '/services/for-import' }
]

const quickLinks = [
  { label: 'FAQ', to: '/faq' },
  { label: 'Shipping', to: '/shipping' },
  { label: 'Terms', to: '/terms' },
  { label: 'Privacy Policy', to: '/privacy-policy' },
  { label: 'Health Blog', to: '/blog' }
]

const socials = [
  { icon: IconFacebook, to: 'https://facebook.com', label: 'Facebook' },
  { icon: IconInstagram, to: 'https://instagram.com', label: 'Instagram' },
  { icon: IconYoutube, to: 'https://youtube.com', label: 'YouTube' }
]

const certifications = ['GMP', 'DRAP', 'ISO', 'HALAL', 'FDA', 'WHO']
</script>

<template>
  <footer class="border-t border-slate-200 bg-slate-50">
    <div class="mx-auto max-w-7xl px-6 py-16">
      <div class="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1fr] lg:gap-8">
        <!-- Logo + description -->
        <div>
          <NuxtLink to="/" class="flex items-center">
            <img src="~/assets/common/Main-logo.png" alt="Human Care Laboratories" class="h-10 w-auto" />
          </NuxtLink>
          <p class="mt-4 max-w-xs text-sm leading-relaxed text-slate-500">
            Human Care Laboratories focuses on providing high-quality healthcare solutions to improve lives.
            With innovation and reliability, we aim to meet diverse health and wellness needs.
          </p>

          <!-- Certification badges -->
          <div class="mt-6 flex flex-wrap gap-2">
            <span
              v-for="cert in certifications"
              :key="cert"
              class="rounded-full border border-brand-teal/20 bg-white px-3 py-1 text-[11px] font-semibold tracking-wide text-brand-navy shadow-sm transition-colors hover:border-brand-teal/50"
            >
              {{ cert }}
            </span>
          </div>
        </div>

        <!-- Company -->
        <div>
          <h3 class="relative inline-block pb-2 text-sm font-semibold uppercase tracking-wide text-brand-navy">
            Company
            <span class="absolute -bottom-0.5 left-0 h-0.5 w-6 rounded-full bg-brand-teal" />
          </h3>
          <ul class="mt-4 space-y-3 text-sm">
            <li v-for="link in companyLinks" :key="link.to">
              <NuxtLink :to="link.to" class="text-slate-500 transition-colors hover:text-brand-teal">
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Services -->
        <div>
          <h3 class="relative inline-block pb-2 text-sm font-semibold uppercase tracking-wide text-brand-navy">
            Services
            <span class="absolute -bottom-0.5 left-0 h-0.5 w-6 rounded-full bg-brand-teal" />
          </h3>
          <ul class="mt-4 space-y-3 text-sm">
            <li v-for="link in serviceLinks" :key="link.to">
              <NuxtLink :to="link.to" class="text-slate-500 transition-colors hover:text-brand-teal">
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="relative inline-block pb-2 text-sm font-semibold uppercase tracking-wide text-brand-navy">
            Quick Links
            <span class="absolute -bottom-0.5 left-0 h-0.5 w-6 rounded-full bg-brand-teal" />
          </h3>
          <ul class="mt-4 space-y-3 text-sm">
            <li v-for="link in quickLinks" :key="link.to">
              <NuxtLink :to="link.to" class="text-slate-500 transition-colors hover:text-brand-teal">
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Socials -->
        <div>
          <h3 class="relative inline-block pb-2 text-sm font-semibold uppercase tracking-wide text-brand-navy">
            Socials
            <span class="absolute -bottom-0.5 left-0 h-0.5 w-6 rounded-full bg-brand-teal" />
          </h3>
          <div class="mt-4 flex gap-3">
            <a
              v-for="social in socials"
              :key="social.to"
              :href="social.to"
              :aria-label="social.label"
              target="_blank"
              rel="noopener noreferrer"
              class="flex h-9 w-9 items-center justify-center rounded-full bg-brand-navy text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-teal hover:shadow-md"
            >
              <component :is="social.icon" class="!h-4 !w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom bar -->
    <div class="border-t border-slate-200 bg-white">
      <div class="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-5 text-xs text-slate-500 sm:flex-row">
        <p>&copy; {{ new Date().getFullYear() }} Human Care Laboratories. All Rights Reserved.</p>
        <p class="font-medium text-brand-navy">GMP Certified · Peshawar Facility</p>
      </div>
    </div>
  </footer>
</template>