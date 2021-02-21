import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import UserModule from '@/store/modules/users'

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue')
    },
    {
      path: '/manager/tickets',
      name: 'manager',
      component: () => import('./views/Manager.vue'),
    },
    {
      path: '/queue',
      name: 'queue',
      component: () => import('./views/Queue.vue')
    },
    {
      path: '*',
      redirect: '/login'
    }
  ]
});

router.beforeEach((to, from, next) => {
  const user = UserModule.user

  if (to.fullPath === '/manager/tickets' && user === null) {
    next('/login')
  } else if (to.fullPath === '/login' && user !== null) {
    next('/manager/tickets')
  } else {
    next()
  }
});

export default router
