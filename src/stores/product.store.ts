import { defineStore } from 'pinia'
import { getProducts } from '@/api/product.api'

import type Product from '@/types/Product'

export const useProductStore = defineStore('product', {
  state: () => ({
    products: [] as Product[]
  }),

  getters: {},

  actions: {
    async getProducts() {
      const {
        data: { data }
      } = await getProducts()

      this.products = data
    }
  }
})
