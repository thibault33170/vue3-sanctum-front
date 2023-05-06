<template>
  <form class="login" @submit.prevent="login">
    <h1>Sign in</h1>
    <label>User name</label>
    <input required v-model="form.email" type="email" placeholder="Email ..." />
    <label>Password</label>
    <input required v-model="form.password" type="password" placeholder="Password ..." />
    <hr />
    <button type="submit">Login</button>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import { useAuthStore } from '@/stores/auth.store.js'

const router = useRouter()
const authStore = useAuthStore()

const form = ref({
  email: null,
  password: null
})

const login = async () => {
  await authStore.login(form.value)

  router.push({ name: 'home' })
}
</script>
