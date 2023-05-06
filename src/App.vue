<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useAuthStore } from '@/stores/auth.store'

const authStore = useAuthStore()
const token: string | null = localStorage.getItem('token')

if (token !== null) {
  authStore.setAuthToken(token)
}
</script>

<template>
  <nav>
    <RouterLink :to="{ name: 'home' }">Home</RouterLink>
    <RouterLink :to="{ name: 'products' }">{{ authStore.getUserName }}</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
nav {
  display: flex;
  justify-content: flex-end;
}

nav > * {
  padding: 15px;
}

main {
  padding: 20px;
}
</style>
