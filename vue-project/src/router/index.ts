import { createRouter, createWebHistory } from 'vue-router';
import Login from '../../views/login.vue';
import Dashboard from '../../views/dashboard.vue';

const routes = [
  {
    path: '/',
    component: () => import('../../views/login.vue'),
  },
  {
    path: '/Dashboard',
    component: () => import('../../views/dashboard.vue'),
  },
  { path: '/:pathMatch(.*)*', name: 'Error', component: () => import('../../views/error404.vue') },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;