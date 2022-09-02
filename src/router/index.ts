import { createRouter, createWebHistory } from 'vue-router';
// import HomeView from '../views/home/index.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: () => import('../views/main/index.vue'),
      children: [
        {
          path: 'home',
          name: 'home',
          component: () => import('../views/home/index.vue'),
        },
        {
          path: 'my',
          name: 'my',
          component: () => import('../views/my/index.vue'),
        },
        {
          path: 'sort',
          name: 'sort',
          component: () => import('../views/sort/index.vue'),
        },
      ],
    },

    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ],
});

export default router;
