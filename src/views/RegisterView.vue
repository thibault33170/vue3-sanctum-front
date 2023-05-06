<template>
  <form class="login" @submit.prevent="register">
    <h1>Sign in</h1>
    <label>User email</label>
    <input required v-model="form.email" type="email" placeholder="Email ..." />

    <label>User fristname</label>
    <input required v-model="form.firstname" type="text" placeholder="Firstname ..." />

    <label>User lastname</label>
    <input required v-model="form.lastname" type="text" placeholder="Lastname ..." />

    <label>Password</label>
    <input required v-model="form.password" type="password" placeholder="Password ..." />
    <input required v-model="form.c_password" type="password" placeholder="Confirm password ..." />

    <hr />
    <button type="submit">Register</button>
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
  password: null,
  c_password: null,
  firstname: null,
  lastname: null
})

const register = async () => {
  await authStore.register(form.value)

  router.push({ name: 'home' })
}
</script>
