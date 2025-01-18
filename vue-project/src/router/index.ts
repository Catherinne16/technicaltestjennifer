import { createRouter, createWebHistory } from 'vue-router';
import Login from '../../views/login.vue';
import Dashboard from '../../views/dashboard.vue';
import Error404 from '../../views/error404.vue'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/Error404',
    name: 'Error404',
    component: Error404
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;