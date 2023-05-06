import { defineStore } from 'pinia'
import { login, register, getUser } from '@/api/auth.api'
import { setAuthToken as setApiToken } from '@/common/api/http'

import type User from '@/types/User'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: localStorage.getItem('token') as string | null,
    user: null as User | null
  }),

  getters: {
    getUserName(state) {
      if (!state.user) {
        return 'Unknow user'
      }

      return `${state.user?.firstname} ${state.user?.lastname}`
    }
  },

  actions: {
    async setAuthToken(token: string) {
      this.token = token

      setApiToken(token)

      await this.getUser()
    },

    async register(payload: {}) {
      try {
        const {
          data: { data }
        } = await register(payload)

        if (data.token) {
          this.setAuthToken(data.token)

          localStorage.setItem('token', data.token)
        }
      } catch (err) {
        console.log(err)
      }
    },

    async login(payload: {}) {
      try {
        const {
          data: { data }
        } = await login(payload)

        if (data.token) {
          this.setAuthToken(data.token)

          localStorage.setItem('token', data.token)
        }
      } catch (err) {
        console.log(err)
      }
    },

    async getUser() {
      try {
        const { data } = await getUser()

        this.user = data
      } catch (err) {
        console.log(err)
      }
    }
  }
})
