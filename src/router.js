import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import Subscriptions from './components/Subscriptions.vue'
import Login from './components/pages/Login.vue'
import Register from './components/pages/Register.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/subscriptions',
      name: 'Subscriptions',
      component: Subscriptions
    }
  ]
})
