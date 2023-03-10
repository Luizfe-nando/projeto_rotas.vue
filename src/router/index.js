import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/sobremesa',
    name: 'sobremesa',
    component: () => import('../views/SobremesaView.vue')
  },
  {
    path: '/pratos-quentes',
    name: 'pratos-quentes',
    component: () => import('../views/PratosQuentesView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
