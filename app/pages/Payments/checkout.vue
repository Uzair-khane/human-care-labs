<script setup>
import { useCartStore } from '~/stores/cart'

const cart = useCartStore()

const form = ref({
  fullName: '',
  email: '',
  phone: '',
  address: '',
  postalCode: '',
})

const paymentMethod = ref('cod') // 'easypaisa', 'jazzcash', 'cod'
const paymentScreenshot = ref(null)

const isSubmitting = ref(false)
const orderSuccess = ref(false)

function handleFileUpload(event) {
  const file = event.target.files[0]
  if (file) {
    paymentScreenshot.value = file
  }
}

function submitOrder() {
  if (!form.value.fullName || !form.value.email || !form.value.phone || !form.value.address || !form.value.postalCode) {
    alert('Please fill all the required details.')
    return
  }

  if ((paymentMethod.value === 'easypaisa' || paymentMethod.value === 'jazzcash') && !paymentScreenshot.value) {
    alert('Please upload a screenshot of your payment.')
    return
  }

  isSubmitting.value = true

  // Simulate network request
  setTimeout(() => {
    cart.clear()
    isSubmitting.value = false
    orderSuccess.value = true
  }, 1500)
}
</script>

<template>
  <div class="min-h-screen bg-slate-50 py-12">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      
      <div v-if="orderSuccess" class="mx-auto max-w-2xl rounded-2xl bg-white p-12 text-center shadow-lg">
        <div class="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
          <svg class="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 class="mt-6 text-3xl font-extrabold text-slate-900">Order Successful!</h2>
        <p class="mt-4 text-lg text-slate-500">Thank you for your purchase. We will process your order shortly.</p>
        <NuxtLink to="/products" class="mt-8 inline-block rounded-md bg-[#1C4489] px-6 py-3 font-semibold text-white transition hover:bg-[#1C4489]/90">
          Continue Shopping
        </NuxtLink>
      </div>

      <div v-else>
        <div class="mb-8">
          <h1 class="text-3xl font-extrabold text-slate-900">Checkout</h1>
          <p class="mt-2 text-sm text-slate-500">Please fill out your details to complete your order.</p>
        </div>

        <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <!-- Left Column: Form -->
          <div class="lg:col-span-2">
            <form @submit.prevent="submitOrder" class="space-y-8">
              
              <!-- Consolidated Form Details -->
              <div class="rounded-xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
                <h2 class="text-xl font-bold text-slate-800">Shipping Information</h2>
              <div class="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label class="block text-sm font-semibold text-slate-700">Full Name *</label>
                  <input v-model="form.fullName" type="text" required class="mt-2 w-full rounded-md border border-slate-300 px-4 py-2.5 text-sm focus:border-[#14B8A6] focus:outline-none focus:ring-1 focus:ring-[#14B8A6]" />
                </div>
                <div>
                  <label class="block text-sm font-semibold text-slate-700">Email Address *</label>
                  <input v-model="form.email" type="email" required class="mt-2 w-full rounded-md border border-slate-300 px-4 py-2.5 text-sm focus:border-[#14B8A6] focus:outline-none focus:ring-1 focus:ring-[#14B8A6]" />
                </div>
                <div class="sm:col-span-2">
                  <label class="block text-sm font-semibold text-slate-700">Phone Number *</label>
                  <input v-model="form.phone" type="tel" required class="mt-2 w-full rounded-md border border-slate-300 px-4 py-2.5 text-sm focus:border-[#14B8A6] focus:outline-none focus:ring-1 focus:ring-[#14B8A6]" />
                </div>
                <div class="sm:col-span-2">
                  <label class="block text-sm font-semibold text-slate-700">Full Address *</label>
                  <input v-model="form.address" type="text" required class="mt-2 w-full rounded-md border border-slate-300 px-4 py-2.5 text-sm focus:border-[#14B8A6] focus:outline-none focus:ring-1 focus:ring-[#14B8A6]" />
                </div>
                <div>
                  <label class="block text-sm font-semibold text-slate-700">Postal Code *</label>
                  <input v-model="form.postalCode" type="text" required class="mt-2 w-full rounded-md border border-slate-300 px-4 py-2.5 text-sm focus:border-[#14B8A6] focus:outline-none focus:ring-1 focus:ring-[#14B8A6]" />
                </div>
              </div>

              <hr class="my-8 border-slate-100" />

              <div class="mt-6">
                <label class="block text-sm font-semibold text-slate-700 mb-4">Select Payment Method *</label>
                <div class="space-y-4">
                
                <!-- Easypaisa -->
                <div class="rounded-lg border" :class="paymentMethod === 'easypaisa' ? 'border-[#14B8A6] bg-[#14B8A6]/5' : 'border-slate-200'">
                  <label class="flex cursor-pointer items-center p-4">
                    <input type="radio" v-model="paymentMethod" value="easypaisa" class="h-4 w-4 text-[#14B8A6] focus:ring-[#14B8A6]" />
                    <span class="ml-3 font-semibold text-slate-800">Easypaisa</span>
                  </label>
                  <div v-if="paymentMethod === 'easypaisa'" class="border-t border-[#14B8A6]/20 px-4 py-5 sm:px-11">
                    <div class="rounded-md bg-white p-4 shadow-sm border border-slate-100">
                      <p class="text-sm text-slate-600">Transfer total amount to the following Easypaisa account:</p>
                      <p class="mt-2 text-lg font-bold text-[#1C4489]">0345-1234567</p>
                      <p class="text-xs text-slate-500">Account Title: Human Care Labs</p>
                      
                      <div class="mt-4">
                        <label class="block text-sm font-semibold text-slate-700">Upload Screenshot *</label>
                        <input type="file" accept="image/*" @change="handleFileUpload" class="mt-2 block w-full text-sm text-slate-500 file:mr-4 file:rounded-md file:border-0 file:bg-[#14B8A6]/10 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-[#14B8A6] hover:file:bg-[#14B8A6]/20" />
                      </div>
                    </div>
                  </div>
                </div>

                <!-- JazzCash -->
                <div class="rounded-lg border" :class="paymentMethod === 'jazzcash' ? 'border-[#1C4489] bg-[#1C4489]/5' : 'border-slate-200'">
                  <label class="flex cursor-pointer items-center p-4">
                    <input type="radio" v-model="paymentMethod" value="jazzcash" class="h-4 w-4 text-[#1C4489] focus:ring-[#1C4489]" />
                    <span class="ml-3 font-semibold text-slate-800">JazzCash</span>
                  </label>
                  <div v-if="paymentMethod === 'jazzcash'" class="border-t border-[#1C4489]/20 px-4 py-5 sm:px-11">
                    <div class="rounded-md bg-white p-4 shadow-sm border border-slate-100">
                      <p class="text-sm text-slate-600">Transfer total amount to the following JazzCash account:</p>
                      <p class="mt-2 text-lg font-bold text-[#1C4489]">0300-7654321</p>
                      <p class="text-xs text-slate-500">Account Title: Human Care Labs</p>
                      
                      <div class="mt-4">
                        <label class="block text-sm font-semibold text-slate-700">Upload Screenshot *</label>
                        <input type="file" accept="image/*" @change="handleFileUpload" class="mt-2 block w-full text-sm text-slate-500 file:mr-4 file:rounded-md file:border-0 file:bg-[#1C4489]/10 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-[#1C4489] hover:file:bg-[#1C4489]/20" />
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Cash on Delivery -->
                <div class="rounded-lg border" :class="paymentMethod === 'cod' ? 'border-slate-800 bg-slate-50' : 'border-slate-200'">
                  <label class="flex cursor-pointer items-center p-4">
                    <input type="radio" v-model="paymentMethod" value="cod" class="h-4 w-4 text-slate-800 focus:ring-slate-800" />
                    <span class="ml-3 font-semibold text-slate-800">Cash on Delivery</span>
                  </label>
                  <div v-if="paymentMethod === 'cod'" class="border-t border-slate-200 px-4 py-4 sm:px-11 text-sm text-slate-600">
                    Pay with cash upon delivery of your order.
                  </div>
                </div>

              </div>
            </div>
          </div>
          </form>
        </div>

        <!-- Right Column: Order Summary -->
        <div class="lg:col-span-1">
          <div class="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 class="text-xl font-bold text-slate-800">Order Summary</h2>
            
            <div class="mt-6 flex flex-col gap-4 max-h-[50vh] overflow-y-auto pt-3 pr-2">
              <div v-if="cart.items.length === 0" class="text-sm text-slate-500">Your cart is empty.</div>
              <div v-for="item in cart.items" :key="item.product.id" class="flex items-center gap-3 border-b border-slate-100 pb-3">
                <div class="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-md bg-gray-50 border border-gray-100 p-1">
                  <img :src="item.product.image" :alt="item.product.title" class="h-full w-full object-contain" />
                  <span class="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-slate-800 text-[10px] font-bold text-white shadow-sm">{{ item.quantity }}</span>
                </div>
                <div class="flex-1">
                  <h4 class="text-xs font-semibold text-slate-700 line-clamp-2">{{ item.product.title }}</h4>
                  <p class="mt-0.5 text-xs font-bold text-[#14B8A6]">Rs. {{ item.product.retailPrice }}</p>
                </div>
              </div>
            </div>

            <div class="mt-6 space-y-3 border-t border-slate-100 pt-6 text-sm">
              <div class="flex items-center justify-between font-medium text-slate-600">
                <span>Subtotal</span>
                <span>Rs. {{ cart.subtotal.toFixed(2) }}</span>
              </div>
              <div class="flex items-center justify-between font-medium text-slate-600">
                <span>Shipping</span>
                <span>Rs. 0.00</span>
              </div>
              <div class="flex items-center justify-between border-t border-slate-200 pt-3 text-lg font-extrabold text-slate-900">
                <span>Total</span>
                <span>Rs. {{ cart.subtotal.toFixed(2) }}</span>
              </div>
            </div>

            <button 
              @click="submitOrder"
              :disabled="cart.items.length === 0 || isSubmitting"
              class="mt-6 w-full rounded-md bg-brand-teal px-4 py-3.5 text-center text-sm font-bold text-white shadow-sm transition-colors hover:bg-brand-teal/90 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-slate-300"
            >
              {{ isSubmitting ? 'Processing...' : 'Place Order' }}
            </button>
            
          </div>
        </div>
      </div>

      </div>
    </div>
  </div>
</template>
