import { RouteLocationNormalized } from 'vue-router'
import { useAuthStore } from '../../modules/Auth/store/auth'

export function isAuthenticated (to: RouteLocationNormalized) {
  const authStore = useAuthStore()

  if (to.name !== 'auth.login' && !authStore.isAuthenticated) return '/login'
}
