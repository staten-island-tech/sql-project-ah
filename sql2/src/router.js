import { supabase } from './client/supabase.js'
import { createRouter, createWebHistory } from 'vue-router'
import pageview from './views/pageview.vue'
import loginview from './views/loginview.vue'
import openview from './views/openview.vue'
import errorview from './views/errorview.vue'
import signinview from './views/signinview.vue'
let localUser

const routes = [
  {
    path: '/signin',
    component: signinview
  },
  {
    path: '/',
    component: openview
  },
  {
    path: '/login',
    component: loginview
  },
  {
    path: '/page',
    component: pageview,
    meta: { requiresAuth: true }
  },
  {
    path: '/error',
    component: errorview
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})
async function getUser(next) {
  localUser = await supabase.auth.getSession()
  if (localUser.data.session == null) {
    next('/error')
  } else {
    next()
  }
}
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    getUser(next)
  } else {
    next()
  }
})

export default router
