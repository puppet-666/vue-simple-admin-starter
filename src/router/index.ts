import { createRouter, createWebHistory } from 'vue-router';
import { NOT_FOUND_ROUTE, REDIRECT_MAIN } from './routes/base';
import createRouteGuard from './guard';
import { appRoutes } from './routes';
import BasicLayout from '@/layouts/BasicLayout.vue';
import 'nprogress/nprogress.css';

NProgress.configure({ showSpinner: false }); // NProgress Configuration

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior() {
    return { top: 0 };
  },
  routes: [
    {
      path: '/',
      name: 'index',
      meta: { title: 'Home' },
      component: BasicLayout,
      redirect: 'login',
      children: [
        ...appRoutes,
      ],
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/index.vue'),
    },
    NOT_FOUND_ROUTE,
    REDIRECT_MAIN,
  ],
});

createRouteGuard(router);

export default router;
