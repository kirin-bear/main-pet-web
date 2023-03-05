import { createRouter, createWebHistory } from 'vue-router'
import axios from 'axios';
import MainView from '@/views/main/main-view.vue'
import SandboxView from '@/views/main/sandbox-view.vue'
import GraphView from '@/views/main/graph-view.vue'
import LoginView from "@/views/main/login-view.vue";
import UserAboutView from "@/views/main/user/about-view.vue";
import UserMemoriesView from "@/views/main/user/memories-view.vue";
import UserFinanceView from "@/views/main/user/finance-view.vue";

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
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/user/about',
      name: 'user-about',
      component: UserAboutView
    },
    {
      path: '/user/memories',
      name: 'user-memories',
      component: UserMemoriesView
    },
    {
      path: '/user/finance',
      name: 'user-finance',
      component: UserFinanceView
    },
    {
      path: '/:pages*',
      name: 'main',
      component: MainView
    },
  ]
});

router.beforeEach(async (to, from) => {
  // TODO: правильнее делать через meta параметры -
  if (to.path.indexOf('user') !== -1) {
    return { name: 'login'};
  }
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
