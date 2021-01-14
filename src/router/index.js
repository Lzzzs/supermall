import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 懒加载
const home = () => import('../views/Home/home')
const category = () => import('../views/Category/category')
const cart = () => import('../views/Cart/cart')
const profile = () => import('../views/Profile/profile')

const routes = [
  {
    path: '/', 
    redirect: '/home'
  },
  {
    path: '/home',
    component: home
  },
  {
    path: '/category',
    component: category
  },
  {
    path: '/cart',
    component: cart
  },
  {
    path: '/profile',
    component: profile
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router