<script setup>
import { ref, computed, watch } from 'vue'
import { useCartStore } from '~/stores/cart'

// ======================================================
// CAPSULE IMAGES
// ======================================================

import capsul1 from '~/assets/Common/categories/capsul/capsul _page-0001.jpg'
import capsul2 from '~/assets/Common/categories/capsul/capsul _page-0002.jpg'
import capsul3 from '~/assets/Common/categories/capsul/capsul _page-0003.jpg'
import capsul4 from '~/assets/Common/categories/capsul/capsul _page-0004.jpg'
import capsul5 from '~/assets/Common/categories/capsul/capsul _page-0005.jpg'
import capsul6 from '~/assets/Common/categories/capsul/capsul _page-0006.jpg'
import capsul7 from '~/assets/Common/categories/capsul/capsul _page-0007.jpg'
import capsul8 from '~/assets/Common/categories/capsul/capsul _page-0008.jpg'

// ======================================================
// LOTION IMAGES
// ======================================================

import lotion1 from '~/assets/Common/categories/lotion/lotion _page-0001.jpg'
import lotion2 from '~/assets/Common/categories/lotion/lotion _page-0002.jpg'
import lotion3 from '~/assets/Common/categories/lotion/lotion _page-0003.jpg'

// ======================================================
// SYRUP IMAGES
// ======================================================

import syrup1 from '~/assets/Common/categories/syrup/Syrup _page-0001.jpg'
import syrup2 from '~/assets/Common/categories/syrup/Syrup _page-0002.jpg'
import syrup3 from '~/assets/Common/categories/syrup/Syrup _page-0003.jpg'
import syrup4 from '~/assets/Common/categories/syrup/Syrup _page-0004.jpg'
import syrup5 from '~/assets/Common/categories/syrup/Syrup _page-0005.jpg'
import syrup6 from '~/assets/Common/categories/syrup/Syrup _page-0006.jpg'
import syrup7 from '~/assets/Common/categories/syrup/Syrup _page-0007.jpg'
import syrup8 from '~/assets/Common/categories/syrup/Syrup _page-0008.jpg'
import syrup9 from '~/assets/Common/categories/syrup/Syrup _page-0009.jpg'
import syrup10 from '~/assets/Common/categories/syrup/Syrup _page-0010.jpg'
import syrup11 from '~/assets/Common/categories/syrup/Syrup _page-0011.jpg'
import syrup12 from '~/assets/Common/categories/syrup/Syrup _page-0012.jpg'
import syrup13 from '~/assets/Common/categories/syrup/Syrup _page-0013.jpg'
import syrup14 from '~/assets/Common/categories/syrup/Syrup _page-0014.jpg'
import syrup15 from '~/assets/Common/categories/syrup/Syrup _page-0015.jpg'
import syrup16 from '~/assets/Common/categories/syrup/Syrup _page-0016.jpg'
import syrup17 from '~/assets/Common/categories/syrup/Syrup _page-0017.jpg'
import syrup18 from '~/assets/Common/categories/syrup/Syrup _page-0018.jpg'
import syrup19 from '~/assets/Common/categories/syrup/Syrup _page-0019.jpg'
import syrup20 from '~/assets/Common/categories/syrup/Syrup _page-0020.jpg'
import syrup21 from '~/assets/Common/categories/syrup/Syrup _page-0021.jpg'
import syrup22 from '~/assets/Common/categories/syrup/Syrup _page-0022.jpg'
import syrup23 from '~/assets/Common/categories/syrup/Syrup _page-0023.jpg'
import syrup24 from '~/assets/Common/categories/syrup/Syrup _page-0024.jpg'
import syrup25 from '~/assets/Common/categories/syrup/Syrup _page-0025.jpg'
import syrup26 from '~/assets/Common/categories/syrup/Syrup _page-0026.jpg'
import syrup27 from '~/assets/Common/categories/syrup/Syrup _page-0027.jpg'
import syrup28 from '~/assets/Common/categories/syrup/Syrup _page-0028.jpg'
import syrup29 from '~/assets/Common/categories/syrup/Syrup _page-0029.jpg'
import syrup30 from '~/assets/Common/categories/syrup/Syrup _page-0030.jpg'
import syrup31 from '~/assets/Common/categories/syrup/Syrup _page-0031.jpg'
import syrup32 from '~/assets/Common/categories/syrup/Syrup _page-0032.jpg'

// ======================================================
// TABLET IMAGES
// ======================================================

import tablet1 from '~/assets/Common/categories/tablets/img4.jpg'
import tablet2 from '~/assets/Common/categories/tablets/img7.jpg'
import tablet3 from '~/assets/Common/categories/tablets/img10.jpg'
import tablet4 from '~/assets/Common/categories/tablets/img13.jpg'
import tablet5 from '~/assets/Common/categories/tablets/img16.jpg'
import tablet6 from '~/assets/Common/categories/tablets/img19.jpg'
import tablet7 from '~/assets/Common/categories/tablets/img22.jpg'
import tablet8 from '~/assets/Common/categories/tablets/img25.jpg'
import tablet9 from '~/assets/Common/categories/tablets/img28.jpg'
import tablet10 from '~/assets/Common/categories/tablets/img31.jpg'

// ======================================================
// EASY EDIT PRODUCT DATA
//
// Baad mein sirf yahan:
// 1. name change karein
// 2. price change karein
// 3. stock change karein
//
// Baqi component ko touch karne ki zarurat nahi.
// ======================================================

const capsuleProducts = [
  {
    name: 'Premium Health Capsule 01',
    price: 899,
    stock: 'IN STOCK',
    image: capsul1
  },
  {
    name: 'Premium Health Capsule 02',
    price: 999,
    stock: 'IN STOCK',
    image: capsul2
  },
  {
    name: 'Premium Health Capsule 03',
    price: 1099,
    stock: 'IN STOCK',
    image: capsul3
  },
  {
    name: 'Premium Health Capsule 04',
    price: 1199,
    stock: 'IN STOCK',
    image: capsul4
  },
  {
    name: 'Premium Health Capsule 05',
    price: 1299,
    stock: 'IN STOCK',
    image: capsul5
  },
  {
    name: 'Premium Health Capsule 06',
    price: 1399,
    stock: 'IN STOCK',
    image: capsul6
  },
  {
    name: 'Premium Health Capsule 07',
    price: 1499,
    stock: 'IN STOCK',
    image: capsul7
  },
  {
    name: 'Premium Health Capsule 08',
    price: 1599,
    stock: 'IN STOCK',
    image: capsul8
  }
]

const lotionProducts = [
  {
    name: 'Skin Care Lotion 01',
    price: 699,
    stock: 'IN STOCK',
    image: lotion1
  },
  {
    name: 'Skin Care Lotion 02',
    price: 849,
    stock: 'IN STOCK',
    image: lotion2
  },
  {
    name: 'Skin Care Lotion 03',
    price: 999,
    stock: 'IN STOCK',
    image: lotion3
  }
]

const syrupProducts = [
  {
    name: 'Health Syrup 01',
    price: 449,
    stock: 'IN STOCK',
    image: syrup1
  },
  {
    name: 'Health Syrup 02',
    price: 499,
    stock: 'IN STOCK',
    image: syrup2
  },
  {
    name: 'Health Syrup 03',
    price: 549,
    stock: 'IN STOCK',
    image: syrup3
  },
  {
    name: 'Health Syrup 04',
    price: 599,
    stock: 'IN STOCK',
    image: syrup4
  },
  {
    name: 'Health Syrup 05',
    price: 649,
    stock: 'IN STOCK',
    image: syrup5
  },
  {
    name: 'Health Syrup 06',
    price: 699,
    stock: 'IN STOCK',
    image: syrup6
  },
  {
    name: 'Health Syrup 07',
    price: 749,
    stock: 'IN STOCK',
    image: syrup7
  },
  {
    name: 'Health Syrup 08',
    price: 799,
    stock: 'IN STOCK',
    image: syrup8
  },
  {
    name: 'Health Syrup 09',
    price: 849,
    stock: 'IN STOCK',
    image: syrup9
  },
  {
    name: 'Health Syrup 10',
    price: 899,
    stock: 'IN STOCK',
    image: syrup10
  },
  {
    name: 'Health Syrup 11',
    price: 949,
    stock: 'IN STOCK',
    image: syrup11
  },
  {
    name: 'Health Syrup 12',
    price: 999,
    stock: 'IN STOCK',
    image: syrup12
  },
  {
    name: 'Health Syrup 13',
    price: 1049,
    stock: 'IN STOCK',
    image: syrup13
  },
  {
    name: 'Health Syrup 14',
    price: 1099,
    stock: 'IN STOCK',
    image: syrup14
  },
  {
    name: 'Health Syrup 15',
    price: 1149,
    stock: 'IN STOCK',
    image: syrup15
  },
  {
    name: 'Health Syrup 16',
    price: 1199,
    stock: 'IN STOCK',
    image: syrup16
  },
  {
    name: 'Health Syrup 17',
    price: 1249,
    stock: 'IN STOCK',
    image: syrup17
  },
  {
    name: 'Health Syrup 18',
    price: 1299,
    stock: 'IN STOCK',
    image: syrup18
  },
  {
    name: 'Health Syrup 19',
    price: 1349,
    stock: 'IN STOCK',
    image: syrup19
  },
  {
    name: 'Health Syrup 20',
    price: 1399,
    stock: 'IN STOCK',
    image: syrup20
  },
  {
    name: 'Health Syrup 21',
    price: 1449,
    stock: 'IN STOCK',
    image: syrup21
  },
  {
    name: 'Health Syrup 22',
    price: 1499,
    stock: 'IN STOCK',
    image: syrup22
  },
  {
    name: 'Health Syrup 23',
    price: 1549,
    stock: 'IN STOCK',
    image: syrup23
  },
  {
    name: 'Health Syrup 24',
    price: 1599,
    stock: 'IN STOCK',
    image: syrup24
  },
  {
    name: 'Health Syrup 25',
    price: 1649,
    stock: 'IN STOCK',
    image: syrup25
  },
  {
    name: 'Health Syrup 26',
    price: 1699,
    stock: 'IN STOCK',
    image: syrup26
  },
  {
    name: 'Health Syrup 27',
    price: 1749,
    stock: 'IN STOCK',
    image: syrup27
  },
  {
    name: 'Health Syrup 28',
    price: 1799,
    stock: 'IN STOCK',
    image: syrup28
  },
  {
    name: 'Health Syrup 29',
    price: 1849,
    stock: 'IN STOCK',
    image: syrup29
  },
  {
    name: 'Health Syrup 30',
    price: 1899,
    stock: 'IN STOCK',
    image: syrup30
  },
  {
    name: 'Health Syrup 31',
    price: 1949,
    stock: 'IN STOCK',
    image: syrup31
  },
  {
    name: 'Health Syrup 32',
    price: 1999,
    stock: 'IN STOCK',
    image: syrup32
  }
]

const tabletProducts = [
  {
    name: 'Health Tablet 01',
    price: 699,
    stock: 'IN STOCK',
    image: tablet1
  },
  {
    name: 'Health Tablet 02',
    price: 799,
    stock: 'IN STOCK',
    image: tablet2
  },
  {
    name: 'Health Tablet 03',
    price: 899,
    stock: 'IN STOCK',
    image: tablet3
  },
  {
    name: 'Health Tablet 04',
    price: 999,
    stock: 'IN STOCK',
    image: tablet4
  },
  {
    name: 'Health Tablet 05',
    price: 1099,
    stock: 'IN STOCK',
    image: tablet5
  },
  {
    name: 'Health Tablet 06',
    price: 1199,
    stock: 'IN STOCK',
    image: tablet6
  },
  {
    name: 'Health Tablet 07',
    price: 1299,
    stock: 'IN STOCK',
    image: tablet7
  },
  {
    name: 'Health Tablet 08',
    price: 1399,
    stock: 'IN STOCK',
    image: tablet8
  },
  {
    name: 'Health Tablet 09',
    price: 1499,
    stock: 'IN STOCK',
    image: tablet9
  },
  {
    name: 'Health Tablet 10',
    price: 1599,
    stock: 'IN STOCK',
    image: tablet10
  }
]

// ======================================================
// BUILD PRODUCTS
// ======================================================

function buildProducts(products, category, categoryKey, startId) {
  return products.map((item, index) => ({
    id: startId + index,
    title: item.name,
    category,
    categoryKey,
    stock: item.stock,
    image: item.image,
    retailPrice: item.price
  }))
}

const allProducts = ref([
  ...buildProducts(
    capsuleProducts,
    'CAPSULE',
    'capsul',
    1
  ),

  ...buildProducts(
    lotionProducts,
    'LOTION',
    'lotion',
    9
  ),

  ...buildProducts(
    syrupProducts,
    'SYRUP',
    'syrup',
    12
  ),

  ...buildProducts(
    tabletProducts,
    'TABLETS',
    'tablets',
    44
  )
])

// ======================================================
// DETAIL PAGE ROUTE
//
// Product ID 1:
// /products/1
//
// Product ID 20:
// /products/20
//
// Agar baad mein route change ho to sirf ye line change karein.
// ======================================================

const PRODUCT_DETAIL_BASE_PATH = '/products'

function openProduct(product) {
  navigateTo(
    `${PRODUCT_DETAIL_BASE_PATH}/${product.id}`
  )
}

// ======================================================
// CATALOG REF
// ======================================================

const catalogSection = ref(null)

// ======================================================
// GRID / LIST VIEW
// ======================================================

const currentView = ref('grid')

// ======================================================
// FILTER
// ======================================================

const isFilterOpen = ref(false)

const selectedCategory = ref('all')

const selectedStock = ref('all')

// ======================================================
// FILTERED PRODUCTS
// ======================================================

const filteredProducts = computed(() => {
  return allProducts.value.filter(product => {
    const matchesCategory =
      selectedCategory.value === 'all' ||
      product.categoryKey === selectedCategory.value

    const matchesStock =
      selectedStock.value === 'all' ||
      product.stock === selectedStock.value

    return matchesCategory && matchesStock
  })
})

// ======================================================
// PAGINATION
// ======================================================

const currentPage = ref(1)

const itemsPerPage = 12

const totalResults = computed(
  () => filteredProducts.value.length
)

const totalPages = computed(
  () =>
    Math.ceil(
      totalResults.value / itemsPerPage
    ) || 1
)

// Reset page after changing filter
watch(
  [
    selectedCategory,
    selectedStock
  ],
  () => {
    currentPage.value = 1
  }
)

// Current page products
const paginatedProducts = computed(() => {
  const start =
    (currentPage.value - 1) *
    itemsPerPage

  const end =
    start +
    itemsPerPage

  return filteredProducts.value.slice(
    start,
    end
  )
})

// Showing start number
const startItemIndex = computed(() =>
  totalResults.value === 0
    ? 0
    : (currentPage.value - 1) *
        itemsPerPage +
      1
)

// Showing end number
const endItemIndex = computed(() =>
  Math.min(
    currentPage.value *
      itemsPerPage,
    totalResults.value
  )
)

// ======================================================
// FORMAT PKR
// ======================================================

function formatPKR(amount) {
  return Number(
    amount
  ).toLocaleString('en-PK')
}

// ======================================================
// PAGINATION NAVIGATION
// ======================================================

function goToPage(page) {
  if (
    page >= 1 &&
    page <= totalPages.value
  ) {
    currentPage.value = page

    if (catalogSection.value) {
      catalogSection.value.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }
}

// ======================================================
// RESET FILTERS
// ======================================================

function resetFilters() {
  selectedCategory.value = 'all'

  selectedStock.value = 'all'
}

// ======================================================
// CART
// ======================================================

const cart = useCartStore()

// ======================================================
// ADD TO CART
// ======================================================

function addToCart(event, product) {
  const card =
    event.currentTarget.closest('.group')

  const imgElement =
    card?.querySelector('img')

  const cartIcon =
    document.getElementById(
      'nav-cart-icon'
    )

  if (
    imgElement &&
    cartIcon
  ) {
    const imgRect =
      imgElement.getBoundingClientRect()

    const cartRect =
      cartIcon.getBoundingClientRect()

    const flyingImg =
      imgElement.cloneNode()

    flyingImg.style.position =
      'fixed'

    flyingImg.style.top =
      `${imgRect.top}px`

    flyingImg.style.left =
      `${imgRect.left}px`

    flyingImg.style.width =
      `${imgRect.width}px`

    flyingImg.style.height =
      `${imgRect.height}px`

    flyingImg.style.zIndex =
      '9999'

    flyingImg.style.transition =
      'all 0.8s cubic-bezier(0.25, 1, 0.5, 1)'

    flyingImg.style.opacity =
      '0.8'

    flyingImg.style.objectFit =
      'contain'

    flyingImg.style.pointerEvents =
      'none'

    document.body.appendChild(
      flyingImg
    )

    // Trigger browser reflow
    void flyingImg.offsetWidth

    flyingImg.style.top =
      `${cartRect.top}px`

    flyingImg.style.left =
      `${cartRect.left}px`

    flyingImg.style.width =
      '24px'

    flyingImg.style.height =
      '24px'

    flyingImg.style.opacity =
      '0'

    flyingImg.style.transform =
      'scale(0.1)'

    setTimeout(() => {
      flyingImg.remove()

      cart.addItem(
        product
      )
    }, 800)
  } else {
    cart.addItem(
      product
    )
  }
}
</script>

<template>
  <section
    ref="catalogSection"
    class="min-h-screen bg-[#FDFDFD] py-8 sm:py-12"
  >
    <div
      class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
    >

      <!-- ============================================== -->
      <!-- TOP HEADER -->
      <!-- ============================================== -->

      <div
        class="mb-8 flex flex-col items-start justify-between gap-4 border-b border-gray-100 pb-5 sm:flex-row sm:items-center"
      >
        <div>
          <h1
            class="text-2xl font-bold tracking-tight text-slate-800 sm:text-3xl"
          >
            Pharmaceutical Catalog
          </h1>

          <p
            class="mt-1 text-xs font-medium text-slate-400 sm:text-sm"
          >
            Showing
            {{ startItemIndex }}-{{ endItemIndex }}
            of
            {{ totalResults }}
            results
          </p>
        </div>

        <!-- Right Controls -->

        <div
          class="flex items-center gap-3"
        >

          <!-- ========================================== -->
          <!-- VIEW SWITCHER -->
          <!-- ========================================== -->

          <div
            class="flex items-center rounded-lg bg-gray-100 p-1"
          >

            <!-- GRID -->

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
              <svg
                class="h-4 w-4 fill-current"
                viewBox="0 0 16 16"
              >
                <path
                  d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3z"
                />
              </svg>
            </button>

            <!-- LIST -->

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
              <svg
                class="h-4 w-4 fill-current"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
            </button>

          </div>

          <!-- ========================================== -->
          <!-- FILTER BUTTON -->
          <!-- ========================================== -->

          <button
            @click="isFilterOpen = true"
            class="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-100/70 px-4 py-1.5 text-xs font-semibold text-slate-600 transition-colors hover:bg-gray-200/80 focus:outline-none"
          >
            <svg
              class="h-3.5 w-3.5 fill-current"
              viewBox="0 0 16 16"
            >
              <path
                d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .354.854l-4.854 4.854V12.5a.5.5 0 0 1-.293.457l-3 1.5A.5.5 0 0 1 5.5 14V6.708L.646 1.854A.5.5 0 0 1 1.5 1.5z"
              />
            </svg>

            <span>
              Filters
            </span>

            <span
              v-if="
                selectedCategory !== 'all' ||
                selectedStock !== 'all'
              "
              class="h-2 w-2 rounded-full bg-blue-600"
            ></span>

          </button>

        </div>
      </div>

      <!-- ============================================== -->
      <!-- EMPTY STATE -->
      <!-- ============================================== -->

      <div
        v-if="
          paginatedProducts.length === 0
        "
        class="my-16 text-center"
      >
        <p
          class="text-lg font-medium text-slate-600"
        >
          No products found matching selected filters.
        </p>

        <button
          @click="resetFilters"
          class="mt-4 text-sm font-semibold text-blue-600 underline"
        >
          Clear all filters
        </button>
      </div>

      <!-- ============================================== -->
      <!-- GRID VIEW -->
      <!-- ============================================== -->

      <div
        v-if="
          currentView === 'grid' &&
          paginatedProducts.length > 0
        "
        class="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >

        <div
          v-for="
            product in paginatedProducts
          "
          :key="product.id"

          role="link"

          tabindex="0"

          @click="
            openProduct(product)
          "

          @keydown.enter="
            openProduct(product)
          "

          @keydown.space.prevent="
            openProduct(product)
          "

          class="group flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >

          <!-- ========================================== -->
          <!-- IMAGE -->
          <!-- ========================================== -->

          <div
            class="relative isolate flex aspect-square w-full items-center justify-center overflow-hidden bg-white p-4"
          >

            <!-- STOCK BADGE -->

            <span
              :class="
                product.stock === 'IN STOCK'
                  ? 'bg-[#A4CAFE] text-slate-700'
                  : 'bg-red-100 text-red-700'
              "

              class="pointer-events-none absolute left-2.5 top-2.5 z-20 rounded px-2 py-0.5 text-[10px] font-bold tracking-wide uppercase"
            >
              {{ product.stock }}
            </span>

            <!-- PRODUCT IMAGE -->

            <img
              :src="
                product.image
              "

              :alt="
                product.title
              "

              class="relative z-0 h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"

              loading="lazy"
            />

          </div>

          <!-- ========================================== -->
          <!-- PRODUCT INFO -->
          <!-- ========================================== -->

          <div
            class="flex flex-1 flex-col bg-[#f1f5fd62] justify-between px-4 py-7"
          >

            <div>

              <!-- CATEGORY -->

              <p
                class="text-[10px] font-bold tracking-wider text-[#14B8A6] uppercase"
              >
                {{ product.category }}
              </p>

              <!-- TITLE -->

              <h3
                class="mt-1.5 line-clamp-2 text-base font-extrabold leading-snug text-gray-900 transition-colors group-hover:text-blue-900"
              >
                {{ product.title }}
              </h3>

              <!-- PRICE -->

              <p
                class="mt-1 text-sm font-bold text-gray-700"
              >
                Rs.
                {{
                  formatPKR(
                    product.retailPrice
                  )
                }}
              </p>

            </div>

            <!-- ======================================== -->
            <!-- ADD TO CART -->
            <!-- ======================================== -->

            <div
              class="mt-4 flex items-center justify-between"
            >

              <button
                @click.stop="
                  e =>
                    addToCart(
                      e,
                      product
                    )
                "

                class="flex items-center gap-2 rounded-sm hover:cursor-pointer bg-[#14B8A6] px-3 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#14B8A6]/90 focus:outline-none"
              >

                <svg
                  class="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>

                Add to Cart

              </button>

            </div>

          </div>

        </div>

      </div>

      <!-- ============================================== -->
      <!-- LIST VIEW -->
      <!-- ============================================== -->

      <div
        v-if="
          currentView === 'list' &&
          paginatedProducts.length > 0
        "

        class="flex flex-col gap-4"
      >

        <div
          v-for="
            product in paginatedProducts
          "

          :key="
            product.id
          "

          role="link"

          tabindex="0"

          @click="
            openProduct(product)
          "

          @keydown.enter="
            openProduct(product)
          "

          @keydown.space.prevent="
            openProduct(product)
          "

          class="group flex cursor-pointer flex-col gap-4 overflow-hidden rounded-xl border border-gray-100 bg-white p-3 shadow-xs transition-all duration-300 hover:shadow-md sm:flex-row sm:items-center sm:gap-6"
        >

          <!-- IMAGE -->

          <div
            class="relative isolate flex h-32 w-32 shrink-0 items-center justify-center rounded-lg bg-[#F3F4F6] p-3"
          >

            <!-- STOCK BADGE -->

            <span
              :class="
                product.stock === 'IN STOCK'
                  ? 'bg-[#A4CAFE] text-slate-700'
                  : 'bg-red-100 text-red-700'
              "

              class="pointer-events-none absolute left-1.5 top-1.5 z-20 rounded px-1.5 py-0.5 text-[9px] font-bold tracking-wide uppercase"
            >
              {{ product.stock }}
            </span>

            <img
              :src="
                product.image
              "

              :alt="
                product.title
              "

              class="relative z-0 h-full w-full object-contain"
            />

          </div>

          <!-- PRODUCT INFO -->

          <div
            class="flex flex-1 flex-col justify-center"
          >

            <p
              class="text-[10px] font-bold tracking-wider text-[#14B8A6] uppercase"
            >
              {{ product.category }}
            </p>

            <h3
              class="mt-1 text-base font-bold text-slate-800 transition-colors group-hover:text-blue-900"
            >
              {{ product.title }}
            </h3>

            <p
              class="mt-1 text-sm font-bold text-gray-700"
            >
              Rs.
              {{
                formatPKR(
                  product.retailPrice
                )
              }}
            </p>

          </div>

          <!-- ADD BUTTON -->

          <div
            class="flex items-center sm:pr-4"
          >

            <button
              @click.stop="
                e =>
                  addToCart(
                    e,
                    product
                  )
              "

              class="flex items-center gap-2 rounded-full bg-[#14B8A6] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#14B8A6]/90 focus:outline-none"
            >

              <svg
                class="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>

              Add

            </button>

          </div>

        </div>

      </div>

      <!-- ============================================== -->
      <!-- PAGINATION -->
      <!-- ============================================== -->

      <div
        v-if="
          totalPages > 1
        "

        class="mt-12 flex items-center justify-center gap-1.5"
      >

        <!-- PREVIOUS -->

        <button
          @click="
            goToPage(
              currentPage - 1
            )
          "

          :disabled="
            currentPage === 1
          "

          class="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 bg-white text-slate-500 transition-all hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40"

          title="Previous Page"
        >

          <svg
            class="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>

        </button>

        <!-- PAGE NUMBERS -->

        <button
          v-for="
            page in totalPages
          "

          :key="
            page
          "

          @click="
            goToPage(
              page
            )
          "

          :class="[
            'flex h-9 w-9 items-center justify-center rounded-lg text-xs font-semibold transition-all',

            currentPage === page
              ? 'bg-[#1E429F] text-white shadow-sm ring-2 ring-[#1E429F]/20'
              : 'border border-gray-200 bg-white text-slate-700 hover:bg-gray-50'
          ]"
        >
          {{ page }}
        </button>

        <!-- NEXT -->

        <button
          @click="
            goToPage(
              currentPage + 1
            )
          "

          :disabled="
            currentPage ===
            totalPages
          "

          class="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 bg-white text-slate-500 transition-all hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40"

          title="Next Page"
        >

          <svg
            class="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>

        </button>

      </div>

    </div>

    <!-- ================================================ -->
    <!-- FILTER MODAL -->
    <!-- ================================================ -->

    <Teleport to="body">

      <div
        v-if="
          isFilterOpen
        "

        class="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4 backdrop-blur-xs"

        @click.self="
          isFilterOpen = false
        "
      >

        <div
          class="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl"
        >

          <!-- MODAL HEADER -->

          <div
            class="flex items-center justify-between border-b border-gray-100 pb-4"
          >

            <h3
              class="text-lg font-bold text-slate-900"
            >
              Filter Catalog
            </h3>

            <button
              @click="
                isFilterOpen = false
              "

              class="text-slate-400 hover:text-slate-600"
            >

              <svg
                class="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>

            </button>

          </div>

          <!-- ========================================== -->
          <!-- FILTER CONTENT -->
          <!-- ========================================== -->

          <div
            class="mt-5 space-y-5"
          >

            <!-- CATEGORY -->

            <div>

              <label
                class="block text-xs font-bold uppercase text-slate-500"
              >
                Category
              </label>

              <select
                v-model="
                  selectedCategory
                "

                class="mt-1.5 w-full rounded-lg border border-gray-200 bg-gray-50 p-2.5 text-sm font-medium text-slate-800 focus:border-blue-500 focus:outline-none"
              >

                <option
                  value="all"
                >
                  All Categories
                </option>

                <option
                  value="capsul"
                >
                  Capsule
                </option>

                <option
                  value="lotion"
                >
                  Lotion
                </option>

                <option
                  value="syrup"
                >
                  Syrup
                </option>

                <option
                  value="tablets"
                >
                  Tablets
                </option>

              </select>

            </div>

            <!-- STOCK -->

            <div>

              <label
                class="block text-xs font-bold uppercase text-slate-500"
              >
                Stock Status
              </label>

              <select
                v-model="
                  selectedStock
                "

                class="mt-1.5 w-full rounded-lg border border-gray-200 bg-gray-50 p-2.5 text-sm font-medium text-slate-800 focus:border-blue-500 focus:outline-none"
              >

                <option
                  value="all"
                >
                  All Availability
                </option>

                <option
                  value="IN STOCK"
                >
                  In Stock Only
                </option>

                <option
                  value="OUT OF STOCK"
                >
                  Out of Stock Only
                </option>

              </select>

            </div>

          </div>

          <!-- ========================================== -->
          <!-- MODAL FOOTER -->
          <!-- ========================================== -->

          <div
            class="mt-6 flex items-center justify-between border-t border-gray-100 pt-4"
          >

            <button
              @click="
                resetFilters
              "

              class="text-xs font-semibold text-slate-500 hover:text-slate-800"
            >
              Reset Filters
            </button>

            <button
              @click="
                isFilterOpen = false
              "

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