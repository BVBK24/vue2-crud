import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import create from '@/components/create'
import update from '@/components/update'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/home/create',
      name: 'create',
      component: create
    },
    {
      path: '/home/update/:id',
      name: 'update',
      component: update
    }
  ]
})
