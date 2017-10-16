import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import Round from '@/components/round'
import Map from '@/components/map'
import Cloudetail from '@/pages/cloudetail'
import Login from '@/pages/login'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/cloudetail',
      name: 'cloudetail',
      component: Cloudetail
    },
    {
      path: '/map',
      name: 'map',
      component: Map
    },
    {
      path: '/',
      name: 'login',
      component: Login
    }
  ]
});
