import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: () => import('../views/main/index.vue'),
      redirect: '/main/home',
      children: [
        {
          path: '/main/home',
          name: 'home',
          component: () => import('../views/home/index.vue'),
        },
        {
          path: '/main/my',
          name: 'my',
          component: () => import('../views/my/index.vue'),
        },
        {
          path: '/main/sort',
          name: 'sort',
          component: () => import('../views/sort/index.vue'),
        },
      ],
    },
    {
      path: '/staple',
      name: 'staple',
      component: () => import('../views/staple/index.vue'),
    },
    {
      path: '/staple/info',
      name: 'stapleInfo',
      component: () => import('../views/staple/info.vue'),
    },
    {
      path: '/productIn',
      name: 'productIn',
      component: () => import('../views/productIn/index.vue'),
    },
    {
      path: '/member',
      name: 'member',
      component: () => import('../views/member/index.vue'),
    },
    {
      path: '/member/info',
      name: 'memberInfo',
      component: () => import('../views/member/info.vue'),
    },
  ],
});

export default router;
