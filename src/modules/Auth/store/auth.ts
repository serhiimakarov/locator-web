import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: {
      id: null
    },

    form: {
      email: null,
      password: null
    }
  }),

  getters: {
    isAuthenticated: (state) => Boolean(state.user.id)
  },

  actions: {
    login: async (payload: LoginForm) => {
      console.log(payload.email, payload.password)
    }
  }
})
