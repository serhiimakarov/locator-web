import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: {
      id: null
    },
  }),

  getters: {
    isAuthenticated: (state) => Boolean(state.user.id)
  }
})
