import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import test from '@/pages/test'
import Autocomplate from '@/components/autocomplate'
import Round from '@/components/round'
import Map from '@/components/map'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: 'c',
      name: 'Map',
      component: Map
    },
    {
      path: 'a',
      name: 'Round',
      component: Round
    }
  ]
});
