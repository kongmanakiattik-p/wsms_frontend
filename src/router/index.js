import { createRouter, createWebHistory } from 'vue-router';
import Homepage from '../pages/Homepage.vue';
import LoginUser from '../pages/LoginUser.vue';
import Userform from '../pages/Userform.vue';
import LoginAffiliate from '../pages/LoginAffiliate.vue';
import AffiliatorForm from '../pages/AffiliatorForm.vue';
import SearchCar from '../pages/SearchCar.vue';

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
  {
    path: '/login-user',
    name: 'LoginUser', 
    component: LoginUser,
  },
  {
    path: '/user-form',
    name: 'Userform',
    component: Userform,
  },
  {
    path: '/login-affiliator',
    name: 'LoginAffiliate',
    component: LoginAffiliate,
  },
  {
    path: '/affiliator-form',
    name: 'AffiliatorForm',
    component: AffiliatorForm,
  },
  {
    path: '/search-car',
    name: 'SearchCar',
    component: SearchCar,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;