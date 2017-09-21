import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/pages/index';
import test from '@/pages/test';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: 'a',
      name: 'test',
      component: test
    }
  ]
});
