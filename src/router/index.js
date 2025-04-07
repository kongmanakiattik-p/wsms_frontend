import { createRouter, createWebHistory } from 'vue-router';
import Homepage from '../pages/Homepage.vue';
import CarDetail from '../pages/CarDetail.vue';
import ShortRent from '../pages/ShortRent.vue';
import LongRent from '../pages/LongRent.vue';
import CorporateRent from '../pages/CorporateRent.vue';
import ChauffeurRent from '../pages/ChauffeurRent.vue';

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
    path: '/short-rent-service',
    name: 'ShortRent',
    component: ShortRent,
  },
  {
    path: '/long-rent-service',
    name: 'LongRent',
    component: LongRent,
  },
  {
    path: '/corporate-rent-service',
    name: 'CorporateRent',
    component: CorporateRent,
  },
  {
    path: '/chauffeur-service',
    name: 'ChauffeurRent',
    component: ChauffeurRent,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;