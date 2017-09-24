import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Search from '@/components/Search'
import User from '@/components/User'
import Login from '@/components/login'
import Mine from '@/components/mine'

Vue.use(Router)

export default new Router({
  	mode:'history',
  	routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/user',
      name: 'User',
      component: User
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    }
  ]
})
