<script setup>
import { ref, computed, watch } from 'vue'

// Asset imports corresponding to your VS Code directory structure
import bg1 from '~/assets/products/Background (1).png'
import bg2 from '~/assets/products/Background (2).png'
import bg3 from '~/assets/products/Background (3).png'
import bg4 from '~/assets/products/Background (4).png'
import bg5 from '~/assets/products/Background (5).png'
import bg6 from '~/assets/products/Background (6).png'
import bg7 from '~/assets/products/Background (7).png'
import bg8 from '~/assets/products/Background (8).png'
import bg9 from '~/assets/products/Background (9).png'
import bg10 from '~/assets/products/Background (10).png'
import bg11 from '~/assets/products/Background (11).png'
import bgMain from '~/assets/products/Background.png'

// Ref for smooth scroll to catalog section instead of absolute page top
const catalogSection = ref(null)

// All Products Master Data
const allProducts = ref([
  // PAGE 1 Items (1-12)
  { id: 1, title: 'Apletyz Syrup – Eat. Nourish. Grow.', category: 'FITNESS, PERSONAL CARE', categoryKey: 'fitness', stock: 'IN STOCK', image: bg1 },
  { id: 2, title: 'Peptacid Antacid Syrup', category: 'DIGESTIVE HEALTH, PERSONAL CARE', categoryKey: 'digestive', stock: 'IN STOCK', image: bg2 },
  { id: 3, title: 'Castor Oil', category: 'HEALTH & WELLNESS', categoryKey: 'wellness', stock: 'IN STOCK', image: bg3 },


  
  { id: 4, title: 'IQ Focus – Ginkgo Biloba Extract Syrup', category: 'BRAIN & NERVES, DIETARY SUPPLEMENTS', categoryKey: 'brain', stock: 'IN STOCK', image: bg4 },
  { id: 5, title: 'Scab-Care Soap', category: 'FITNESS, PERSONAL CARE', categoryKey: 'fitness', stock: 'IN STOCK', image: bg5 },
  { id: 6, title: 'IQ Focus Syrup (Box)', category: 'DIGESTIVE HEALTH, PERSONAL CARE', categoryKey: 'digestive', stock: 'OUT OF STOCK', image: bg6 },
  { id: 7, title: 'Permitron Lotion', category: 'HEALTH & WELLNESS', categoryKey: 'wellness', stock: 'IN STOCK', image: bg7 },
  { id: 8, title: 'Pumsa Syrup', category: 'BRAIN & NERVES, DIETARY SUPPLEMENTS', categoryKey: 'brain', stock: 'IN STOCK', image: bg8 },
  { id: 9, title: 'Kidz D3 Drops', category: 'FITNESS, PERSONAL CARE', categoryKey: 'fitness', stock: 'IN STOCK', image: bg9 },
  { id: 10, title: 'O.R.S Powder Sachet', category: 'DIGESTIVE HEALTH, PERSONAL CARE', categoryKey: 'digestive', stock: 'IN STOCK', image: bg10 },
  { id: 11, title: 'Glutox Tablets', category: 'HEALTH & WELLNESS', categoryKey: 'wellness', stock: 'IN STOCK', image: bg11 },
  { id: 12, title: 'Hi-Taller Syrup', category: 'BRAIN & NERVES, DIETARY SUPPLEMENTS', categoryKey: 'brain', stock: 'IN STOCK', image: bgMain },

  // PAGE 2 Items (13-24)
  { id: 13, title: 'Apletyz Syrup (Batch 2)', category: 'FITNESS, PERSONAL CARE', categoryKey: 'fitness', stock: 'IN STOCK', image: bg1 },
  { id: 14, title: 'Peptacid Antacid Syrup (Batch 2)', category: 'DIGESTIVE HEALTH, PERSONAL CARE', categoryKey: 'digestive', stock: 'IN STOCK', image: bg2 },
  { id: 15, title: 'Castor Oil (Pure Extract)', category: 'HEALTH & WELLNESS', categoryKey: 'wellness', stock: 'IN STOCK', image: bg3 },
  { id: 16, title: 'IQ Focus – Advanced Formula', category: 'BRAIN & NERVES, DIETARY SUPPLEMENTS', categoryKey: 'brain', stock: 'IN STOCK', image: bg4 },
  { id: 17, title: 'Scab-Care Soap (Pack of 2)', category: 'FITNESS, PERSONAL CARE', categoryKey: 'fitness', stock: 'IN STOCK', image: bg5 },
  { id: 18, title: 'IQ Focus Syrup (Family Box)', category: 'DIGESTIVE HEALTH, PERSONAL CARE', categoryKey: 'digestive', stock: 'IN STOCK', image: bg6 },
  { id: 19, title: 'Permitron Lotion 100ml', category: 'HEALTH & WELLNESS', categoryKey: 'wellness', stock: 'IN STOCK', image: bg7 },
  { id: 20, title: 'Pumsa Syrup High Strength', category: 'BRAIN & NERVES, DIETARY SUPPLEMENTS', categoryKey: 'brain', stock: 'IN STOCK', image: bg8 },
  { id: 21, title: 'Kidz D3 Drops Forte', category: 'FITNESS, PERSONAL CARE', categoryKey: 'fitness', stock: 'IN STOCK', image: bg9 },
  { id: 22, title: 'O.R.S Powder Sachet (Lemon Flavor)', category: 'DIGESTIVE HEALTH, PERSONAL CARE', categoryKey: 'digestive', stock: 'IN STOCK', image: bg10 },
  { id: 23, title: 'Glutox Ultra Tablets', category: 'HEALTH & WELLNESS', categoryKey: 'wellness', stock: 'IN STOCK', image: bg11 },
  { id: 24, title: 'Hi-Taller Max Syrup', category: 'BRAIN & NERVES, DIETARY SUPPLEMENTS', categoryKey: 'brain', stock: 'IN STOCK', image: bgMain },

  // PAGE 3 Items (25-30)
  { id: 25, title: 'Apletyz Extra Strength', category: 'FITNESS, PERSONAL CARE', categoryKey: 'fitness', stock: 'IN STOCK', image: bg1 },
  { id: 26, title: 'Peptacid Max Syrup', category: 'DIGESTIVE HEALTH, PERSONAL CARE', categoryKey: 'digestive', stock: 'IN STOCK', image: bg2 },
  { id: 27, title: 'Organic Castor Oil', category: 'HEALTH & WELLNESS', categoryKey: 'wellness', stock: 'IN STOCK', image: bg3 },
  { id: 28, title: 'IQ Focus Junior', category: 'BRAIN & NERVES, DIETARY SUPPLEMENTS', categoryKey: 'brain', stock: 'IN STOCK', image: bg4 },
  { id: 29, title: 'Scab-Care Herbal Soap', category: 'FITNESS, PERSONAL CARE', categoryKey: 'fitness', stock: 'IN STOCK', image: bg5 },
  { id: 30, title: 'Permitron Plus Lotion', category: 'HEALTH & WELLNESS', categoryKey: 'wellness', stock: 'IN STOCK', image: bg7 },
])

// Layout View Toggle State ('grid' | 'list')
const currentView = ref('grid')

// Filter Modal State
const isFilterOpen = ref(false)
const selectedCategory = ref('all')
const selectedStock = ref('all')

// Filtered Products Logic
const filteredProducts = computed(() => {
  return allProducts.value.filter(product => {
    const matchesCategory = selectedCategory.value === 'all' || product.categoryKey === selectedCategory.value
    const matchesStock = selectedStock.value === 'all' || product.stock === selectedStock.value
    return matchesCategory && matchesStock
  })
})

// Pagination State
const currentPage = ref(1)
const itemsPerPage = 12
const totalResults = computed(() => filteredProducts.value.length)
const totalPages = computed(() => Math.ceil(totalResults.value / itemsPerPage) || 1)

// Reset Page on Filter Change
watch([selectedCategory, selectedStock], () => {
  currentPage.value = 1
})

// Slice Products according to Current Page
const paginatedProducts = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return filteredProducts.value.slice(start, end)
})

const startItemIndex = computed(() => totalResults.value === 0 ? 0 : ((currentPage.value - 1) * itemsPerPage) + 1)
const endItemIndex = computed(() => Math.min(currentPage.value * itemsPerPage, totalResults.value))

// Fixed Navigation Function (Targeted Smooth Scroll)
function goToPage(page) {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page
    
    // Smoothly scroll to catalog top header instead of absolute page top (0,0)
    if (catalogSection.value) {
      catalogSection.value.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    
    // Note: Agar aap bilkul bhi scroll nahi chahte, toh scrollIntoView wali 3 lines ko simple delete kar dein.
  }
}

function resetFilters() {
  selectedCategory.value = 'all'
  selectedStock.value = 'all'
}
</script>

<template>
  <section ref="catalogSection" class="min-h-screen bg-[#FDFDFD] py-8 sm:py-12">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      
      <!-- Top Header / Bar -->
      <div class="mb-8 flex flex-col items-start justify-between gap-4 border-b border-gray-100 pb-5 sm:flex-row sm:items-center">
        <div>
          <h1 class="text-2xl font-bold tracking-tight text-slate-800 sm:text-3xl">
            Pharmaceutical Catalog
          </h1>
          <p class="mt-1 text-xs font-medium text-slate-400 sm:text-sm">
            Showing {{ startItemIndex }}-{{ endItemIndex }} of {{ totalResults }} results
          </p>
        </div>

        <!-- Right View Toggles & Filter -->
        <div class="flex items-center gap-3">
          <!-- View Switcher -->
          <div class="flex items-center rounded-lg bg-gray-100 p-1">
            <!-- Grid View Button -->
            <button 
              @click="currentView = 'grid'"
              :class="[
                'rounded-md p-1.5 transition-all',
                currentView === 'grid' 
                  ? 'bg-white text-blue-900 shadow-sm' 
                  : 'text-slate-400 hover:text-slate-600'
              ]" 
              title="Grid View"
            >
              <svg class="h-4 w-4 fill-current" viewBox="0 0 16 16">
                <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3z"/>
              </svg>
            </button>

            <!-- List View Button -->
            <button 
              @click="currentView = 'list'"
              :class="[
                'rounded-md p-1.5 transition-all',
                currentView === 'list' 
                  ? 'bg-white text-blue-900 shadow-sm' 
                  : 'text-slate-400 hover:text-slate-600'
              ]" 
              title="List View"
            >
              <svg class="h-4 w-4 fill-current" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
              </svg>
            </button>
          </div>

          <!-- Filters Button -->
          <button 
            @click="isFilterOpen = true"
            class="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-100/70 px-4 py-1.5 text-xs font-semibold text-slate-600 transition-colors hover:bg-gray-200/80 focus:outline-none"
          >
            <svg class="h-3.5 w-3.5 fill-current" viewBox="0 0 16 16">
              <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .354.854l-4.854 4.854V12.5a.5.5 0 0 1-.293.457l-3 1.5A.5.5 0 0 1 5.5 14V6.708L.646 1.854A.5.5 0 0 1 1.5 1.5z"/>
            </svg>
            <span>Filters</span>
            <span v-if="selectedCategory !== 'all' || selectedStock !== 'all'" class="h-2 w-2 rounded-full bg-blue-600"></span>
          </button>
        </div>
      </div>

      <!-- Empty State -->
      <div v-if="paginatedProducts.length === 0" class="my-16 text-center">
        <p class="text-lg font-medium text-slate-600">No products found matching selected filters.</p>
        <button @click="resetFilters" class="mt-4 text-sm font-semibold text-blue-600 underline">
          Clear all filters
        </button>
      </div>

      <!-- GRID VIEW -->
   <div 
     v-if="currentView === 'grid' && paginatedProducts.length > 0" 
     class="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
   >
  <div 
    v-for="product in paginatedProducts" 
    :key="product.id"
    class="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
  >
    <div class="relative flex aspect-square w-full items-center justify-center overflow-hidden bg-white p-4">
      <span 
        :class="product.stock === 'IN STOCK' ? 'bg-[#A4CAFE] text-slate-700' : 'bg-red-100 text-red-700'"
        class="absolute left-2.5 top-2.5 rounded px-2 py-0.5 text-[10px] font-bold tracking-wide uppercase"
      >
        {{ product.stock }}
      </span>

      <img
        :src="product.image"
        :alt="product.title"
        class="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
        loading="lazy"
      />
    </div>

    <div class="flex flex-1 flex-col bg-[#f1f5fd62] justify-between px-4 py-7 ">
      <div>
        <p class="text-[10px] font-bold tracking-wider text-[#14B8A6] uppercase">
          {{ product.category }}
        </p>
        <h3 class="mt-1.5 line-clamp-2 text-base font-extrabold leading-snug text-gray-900 transition-colors group-hover:text-blue-900">
          {{ product.title }}
        </h3>
      </div>
    </div>
  </div>
</div>
      <!-- LIST VIEW -->
      <div 
        v-if="currentView === 'list' && paginatedProducts.length > 0" 
        class="flex flex-col gap-4"
      >
        <div 
          v-for="product in paginatedProducts" 
          :key="product.id"
          class="group flex flex-col gap-4 overflow-hidden rounded-xl border border-gray-100 bg-white p-3 shadow-xs transition-all duration-300 hover:shadow-md sm:flex-row sm:items-center sm:gap-6"
        >
          <div class="relative flex h-32 w-32 shrink-0 items-center justify-center rounded-lg bg-[#F3F4F6] p-3">
           
            <img :src="product.image" :alt="product.title" class="h-full w-full object-contain" />
          </div>

          <div class="flex flex-1 flex-col justify-center">
            <p class="text-[10px] font-bold tracking-wider text-[#14B8A6] uppercase">
              {{ product.category }}
            </p>
            <h3 class="mt-1 text-base font-bold text-slate-800 transition-colors group-hover:text-blue-900">
              {{ product.title }}
            </h3>
          </div>
        </div>
      </div>

      <!-- PAGINATION COMPONENT -->
      <div v-if="totalPages > 1" class="mt-12 flex items-center justify-center gap-1.5">
        <!-- Previous Page Button -->
        <button
          @click="goToPage(currentPage - 1)"
          :disabled="currentPage === 1"
          class="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 bg-white text-slate-500 transition-all hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40"
          title="Previous Page"
        >
          <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
          </svg>
        </button>

        <!-- Page Numbers List -->
        <button
          v-for="page in totalPages"
          :key="page"
          @click="goToPage(page)"
          :class="[
            'flex h-9 w-9 items-center justify-center rounded-lg text-xs font-semibold transition-all',
            currentPage === page
              ? 'bg-[#1E429F] text-white shadow-sm ring-2 ring-[#1E429F]/20'
              : 'border border-gray-200 bg-white text-slate-700 hover:bg-gray-50'
          ]"
        >
          {{ page }}
        </button>

        <!-- Next Page Button -->
        <button
          @click="goToPage(currentPage + 1)"
          :disabled="currentPage === totalPages"
          class="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 bg-white text-slate-500 transition-all hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40"
          title="Next Page"
        >
          <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
        </button>
      </div>

    </div>

    <!-- FILTER MODAL POPUP -->
    <Teleport to="body">
      <div 
        v-if="isFilterOpen" 
        class="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4 backdrop-blur-xs"
        @click.self="isFilterOpen = false"
      >
        <div class="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
          <div class="flex items-center justify-between border-b border-gray-100 pb-4">
            <h3 class="text-lg font-bold text-slate-900">Filter Catalog</h3>
            <button @click="isFilterOpen = false" class="text-slate-400 hover:text-slate-600">
              <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>

          <div class="mt-5 space-y-5">
            <!-- Category Filter -->
            <div>
              <label class="block text-xs font-bold uppercase text-slate-500">Category</label>
              <select 
                v-model="selectedCategory" 
                class="mt-1.5 w-full rounded-lg border border-gray-200 bg-gray-50 p-2.5 text-sm font-medium text-slate-800 focus:border-blue-500 focus:outline-none"
              >
                <option value="all">All Categories</option>
                <option value="fitness">Fitness & Personal Care</option>
                <option value="digestive">Digestive Health</option>
                <option value="wellness">Health & Wellness</option>
                <option value="brain">Brain & Nerves</option>
              </select>
            </div>

            <!-- Stock Filter -->
            <div>
              <label class="block text-xs font-bold uppercase text-slate-500">Stock Status</label>
              <select 
                v-model="selectedStock" 
                class="mt-1.5 w-full rounded-lg border border-gray-200 bg-gray-50 p-2.5 text-sm font-medium text-slate-800 focus:border-blue-500 focus:outline-none"
              >
                <option value="all">All Availability</option>
                <option value="IN STOCK">In Stock Only</option>
                <option value="OUT OF STOCK">Out of Stock Only</option>
              </select>
            </div>
          </div>

          <!-- Modal Footer Actions -->
          <div class="mt-6 flex items-center justify-between border-t border-gray-100 pt-4">
            <button 
              @click="resetFilters" 
              class="text-xs font-semibold text-slate-500 hover:text-slate-800"
            >
              Reset Filters
            </button>
            <button 
              @click="isFilterOpen = false" 
              class="rounded-lg bg-[#1E429F] px-5 py-2 text-xs font-semibold text-white shadow-sm hover:bg-[#1A3888]"
            >
              Apply Filters
            </button>
          </div>
        </div>
      </div>
    </Teleport>
  </section>
</template>