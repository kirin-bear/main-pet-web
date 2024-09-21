import { createRouter, createWebHistory } from 'vue-router';
import MainView from '@/views/main/main-view.vue';
import SandboxView from '@/views/main/sandbox-view.vue';
import GraphView from '@/views/main/frontend/graph-view.vue';
import HighchartView from '@/views/main/frontend/highchart-view.vue';
import LoginView from "@/views/main/login-view.vue";
import UserAboutView from "@/views/main/user/about-view.vue";
import UserMemoriesView from "@/views/main/user/memories-view.vue";
import UserFinanceView from "@/views/main/user/finance-view.vue";
import WorksView from "@/views/main/works-view.vue";
import {authMiddleware} from "@/middleware/auth";
import api from "@/plugins/kirin-bear-api/api";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainView
    },
    {
      path: '/frontend/graph',
      name: 'graph',
      component: GraphView
    },
    {
      path: '/works',
      name: 'works',
      component: WorksView
    },
    {
      path: '/frontend/highchart',
      name: 'highchart',
      component: HighchartView
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
      component: UserAboutView,
      meta: {
        requireAuth: true,
      }
    },
    {
      path: '/user/memories',
      name: 'user-memories',
      component: UserMemoriesView,
      meta: {
        requireAuth: true,
      }
    },
    {
      path: '/user/finance',
      name: 'user-finance',
      component: UserFinanceView,
      meta: {
        requireAuth: true,
      }
    },
    {
      path: '/:pages*',
      name: 'main',
      component: MainView
    },
  ]
});

router.beforeEach(async (to, from) => {
  if (to.meta.requireAuth && !authMiddleware()) {
    return { name: 'login'};
  }
  if (to.name === 'login' && authMiddleware()) {
    return { name: 'user-about'}
  }

});

router.afterEach((to, from) => {
  api.visit.save(location.origin+to.fullPath, location.origin+from.fullPath);
})

export default router
