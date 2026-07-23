import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [] // { product, quantity }
  }),

  getters: {
    subtotal: (state) =>
      state.items.reduce((sum, item) => sum + item.product.retailPrice * item.quantity, 0),
    itemCount: (state) => state.items.reduce((sum, item) => sum + item.quantity, 0)
  },

  actions: {
    addItem(product, quantity = 1) {
      const existing = this.items.find((i) => i.product.id === product.id)
      if (existing) {
        existing.quantity += quantity
      } else {
        this.items.push({ product, quantity })
      }
    },
    removeItem(productId) {
      this.items = this.items.filter((i) => i.product.id !== productId)
    },
    updateQuantity(productId, quantity) {
      const item = this.items.find((i) => i.product.id === productId)
      if (item) item.quantity = Math.max(1, quantity)
    },
    clear() {
      this.items = []
    }
  }
})