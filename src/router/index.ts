import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/views/main/MainView.vue'
import Sandbox from '@/views/main/SandboxView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main
    },
    {
      path: '/sandbox',
      name: 'sandbox',
      component: Sandbox
    },
    {
      path: '/:pages*',
      name: 'main',
      component: Main
    },
  ]
})

export default router
