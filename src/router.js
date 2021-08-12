import Vue from 'vue';
import VueRouter from 'vue-router';

import home from './app/home/home.route';

Vue.use(VueRouter);

const routes = [
  home,
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
