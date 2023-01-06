import { createRouter, createWebHistory } from 'vue-router'
import axios from 'axios';
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
});

router.afterEach((to, from) => {
  axios
      .post(import.meta.env.VITE_KIRIN_BEAR_API_URL+'/api/v1/visit', {
        page_to: to.fullPath,
        page_from: from.fullPath,
      })
      .then(() => {});
})

export default router
