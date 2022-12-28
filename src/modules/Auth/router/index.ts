export const routerPrefix = 'auth'

export default [
  {
    name: `${routerPrefix}.login`,
    path: '/login',
    component: () => import(/** webpackChunkName: "auth.login" */ '@/modules/Auth/views/Login.vue')
  }
]
