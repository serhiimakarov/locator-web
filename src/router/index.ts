// Composables
import { createRouter, createWebHistory } from 'vue-router'

import authRouter from '../modules/Auth/router/index'

import { isAuthenticated } from './middlewares/isAuthenticated'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      ...authRouter
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

// Check if user authenticated
router.beforeEach(isAuthenticated);

export default router
