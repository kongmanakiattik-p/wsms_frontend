import { createRouter, createWebHistory } from 'vue-router';
import Homepage from '../pages/Homepage.vue';
import CarDetail from '../pages/CarDetail.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Homepage, // Use Homepage.vue for the root route
  },
  {
    path: '/car-detail',
    name: 'CarDetail',
    component: CarDetail,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;