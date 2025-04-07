import { createRouter, createWebHistory } from 'vue-router';
import Homepage from '../pages/Homepage.vue';
import CarDetail from '../pages/CarDetail.vue';
import UserRegister from '../pages/UserRegister.vue';
import AffiliateRegister from '../pages/AffiliateRegister.vue';

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
  {
    path: '/user-register',
    name: 'UserRegister',
    component: UserRegister,
  },
  {
    path: '/affiliate-register',
    name: 'AffiliateRegister',
    component: AffiliateRegister,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;