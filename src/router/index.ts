import { createRouter, createWebHistory } from 'vue-router'
import axios from 'axios';
import MainView from '@/views/main/main-view.vue'
import SandboxView from '@/views/main/sandbox-view.vue'
import GraphView from '@/views/main/graph-view.vue'
import AuthView from "@/views/main/auth-view.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainView
    },
    {
      path: '/graph',
      name: 'graph',
      component: GraphView
    },
    {
      path: '/sandbox',
      name: 'sandbox',
      component: SandboxView
    },
    {
      path: '/:pages*',
      name: 'main',
      component: MainView
    },
    {
      path: '/auth',
      name: 'auth',
      component: AuthView
    }
  ]
});

router.afterEach((to, from) => {
  axios
      .post(import.meta.env.VITE_KIRIN_BEAR_API_URL+'/api/v1/visit', {
        referer: location.origin+from.fullPath,
        page: location.origin+to.fullPath,
      })
      .then(() => {});
})

export default router
