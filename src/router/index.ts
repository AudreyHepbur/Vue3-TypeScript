import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import App from '../App.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'App',
    component: App
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
