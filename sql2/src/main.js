// main.js
import { supabase } from '../client/supabase.js'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import pageview from './views/pageview.vue'
import loginview from './views/loginview.vue'
import openview from './views/openview.vue'

const routes = [
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
    component: pageview
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})
let localuser
router.beforeEach(to,from,next)=>{if(to.meta.requiresAuth)}
createApp(App).use(router).mount('#app')
