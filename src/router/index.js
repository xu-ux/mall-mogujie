import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home =  () => import('views/home/Home')
const Profile = () => import('views/profile/Profile')
const Cart = () => import('views/cart/Cart')
const Category = () => import('views/category/Category')
const Detail = () => import('views/detail/Detail')

const routes = [
  { path: '/', redirect: '/home'},
  {
    path:"/home",
    component: Home
  },{
    path:"/profile",
    component: Profile
  },{
    path:"/cart",
    component: Cart
  },{
    path:"/category",
    component: Category
  },{
    path:"/detail/:iid",
    component: Detail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
