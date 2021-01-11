import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Product from '../views/Product.vue'
import Lifecycle from '../views/Lifecycle.vue'
import Detail from '../views/Detail.vue'
import Cart from '../views/Cart.vue'
import Profile from '../views/Profile.vue'
import History from '../views/History.vue'
import Login from '../views/auth/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import Newproduct from '../views/Newproduct.vue'
import Newpromo from '../views/Newpromo.vue'
import Register from '../views/Register.vue'
import store from '../store'
import Postproduct from '../views/Postproduct.vue'
import Updateproduct from '../views/Updateproduct.vue'
import Deleteproduct from '../views/Deleteproduct.vue'
import Coba from '../views/coba.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { requiresAuth: true }
  },
  {
    path: '/product',
    name: 'Product',
    component: Product,
    meta: { requiresAuth: true }
  },
  {
    path: '/lifecycle',
    name: 'Lifecycle',
    component: Lifecycle
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail,
    meta: { requiresAuth: true }
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
    meta: { requiresAuth: true }
  },
  {
    path: '/profile/:id',
    name: 'Profile',
    component: Profile,
    meta: { requiresAuth: true }
  },
  {
    path: '/history',
    name: 'History',
    component: History,
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { requiresVisitor: true }
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: { requiresAuth: true }
  },
  {
    path: '/newproduct',
    name: 'Newproduct',
    component: Newproduct,
    meta: { requiresAuth: true }
  },
  {
    path: '/newpromo',
    name: 'Newpromo',
    component: Newpromo,
    meta: { requiresAuth: true }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: { requiresVisitor: true }
  },
  {
    path: '/post',
    name: 'Post',
    component: Postproduct,
    meta: { requiresAuth: true }
  },
  {
    path: '/updateproduct/:id',
    name: 'Updateproduct',
    component: Updateproduct,
    meta: { requiresAuth: true }
  },
  {
    path: '/deleteproduct/:id',
    name: 'Deleteproduct',
    component: Deleteproduct,
    meta: { requiresAuth: true }
  },
  {
    path: '/coba',
    name: 'coba',
    component: Coba,
    meta: { requiresAuth: true }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.isLogin) {
      next({
        path: '/login'
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresVisitor)) {
    if (store.getters.isLogin) {
      next({
        path: '/'
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
