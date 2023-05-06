<template>
  <h1>Hi ! my name is {{ authStore.getUserName }} !</h1>

  <h3>This is all the products</h3>
  <ul>
    <li v-for="product in products" :key="product.id">{{ product.name }}</li>
  </ul>
</template>

<script setup lang="ts">
import { computed } from 'vue'

import type Product from '@/types/Product'
import { useProductStore } from '@/stores/product.store'
import { useAuthStore } from '@/stores/auth.store'

const productStore = useProductStore()
const authStore = useAuthStore()

productStore.getProducts()

const products = computed<Product[]>(() => productStore.products)
</script>

<style scoped>
h3 {
  padding: 15px 0;
}
</style>
