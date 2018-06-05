import Vue from 'vue';

import VueRouter from 'vue-router';

import {
  routers
} from './router';

Vue.use(VueRouter);

const router = new VueRouter({
  base: '/spa/',
  mode: 'history',
  routes: routers
});

router.beforeEach((to, from, next) => {
  console.log('=============');
  next();
});

router.afterEach((to) => {

});

export default router;
