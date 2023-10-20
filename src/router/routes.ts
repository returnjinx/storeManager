import type { RouteRecordRaw } from 'vue-router';
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'main',
    component: () => import('@/views/main/index.vue'),
    redirect: '/main/home',
    children: [
      {
        path: '/main/home',
        name: 'home',
        component: () => import('@/views/home/index.vue'),
      },
      {
        path: '/main/my',
        name: 'my',
        component: () => import('@/views/my/index.vue'),
      },
      {
        path: '/main/sort',
        name: 'sort',
        component: () => import('@/views/sort/index.vue'),
      },
    ],
  },
  {
    path: '/staple', //分类
    name: 'staple',
    component: () => import('@/views/staple/index.vue'),
  },
  {
    path: '/staple/info', //分类详情
    name: 'stapleInfo',
    component: () => import('@/views/staple/info.vue'),
  },
  {
    path: '/productIn',
    name: 'productIn',
    component: () => import('@/views/productIn/index.vue'),
  },
  {
    path: '/productIn/info',
    name: 'productInInfo',
    component: () => import('@/views/productIn/info.vue'),
  },
  {
    path: '/member',
    name: 'member',
    component: () => import('@/views/member/index.vue'),
  },
  {
    path: '/member/info',
    name: 'memberInfo',
    component: () => import('@/views/member/info.vue'),
  },
  {
    path: '/sell',
    name: 'sell',
    component: () => import('@/views/sell/index.vue'),
  },
  {
    path: '/sell/info',
    name: 'sellInfo',
    component: () => import('@/views/sell/info.vue'),
  },
  {
    path: '/treat',
    name: 'treat',
    component: () => import('@/views/treat/index.vue'),
  },
  {
    path: '/treat/info',
    name: 'treatInfo',
    component: () => import('@/views/treat/info.vue'),
  },

  {
    path: '/login',
    name: 'login',
    component: () => import('@/components/login/index.vue'),
  },
];

export default routes;
