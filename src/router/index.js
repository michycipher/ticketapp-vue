// import { createRouter, createWebHistory } from 'vue-router'
// import Landing from '../views/Landing.vue'
// import Login from '../views/Login.vue'
// import Signup from '../views/Signup.vue'
// import Dashboard from '../views/Dashboard.vue'
// import Tickets from '../views/Tickets.vue'

// const routes = [
//   { path: '/', component: Landing },
//   { path: '/auth/login', component: Login },
//   { path: '/auth/signup', component: Signup },
//   {
//     path: '/dashboard',
//     component: Dashboard,
//     meta: { requiresAuth: true },
//   },
//   {
//     path: '/tickets',
//     component: Tickets,
//     meta: { requiresAuth: true },
//   },
// ]

// const router = createRouter({
//   history: createWebHistory(),
//   routes,
// })

// router.beforeEach((to, from, next) => {
//   const isAuth = !!localStorage.getItem('ticketapp_session')
//   if (to.meta.requiresAuth && !isAuth) {
//     next('/auth/login')
//   } else {
//     next()
//   }
// })

// export default router

import { createRouter, createWebHistory } from 'vue-router'
import Landing from '../views/Landing.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import Dashboard from '../views/Dashboard.vue'
import Tickets from '../views/Tickets.vue'

const routes = [
  { path: '/', component: Landing },
  {
    path: '/auth/login',
    component: Login,
    meta: { guestOnly: true },
  },
  {
    path: '/auth/signup',
    component: Signup,
    meta: { guestOnly: true },
  },
  {
    path: '/dashboard',
    component: Dashboard,
    meta: { requiresAuth: true },
  },
  {
    path: '/tickets',
    component: Tickets,
    meta: { requiresAuth: true },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  const isAuth = !!localStorage.getItem('ticketapp_session')

  if (to.meta.requiresAuth && !isAuth) {
    next('/auth/login')
  } else if (to.meta.guestOnly && isAuth) {
    next('/dashboard')
  } else {
    next()
  }
})

export default router