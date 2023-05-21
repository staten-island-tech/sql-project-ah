// main.js

import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import pageview from "./views/pageview.vue";
import loginview from "./views/loginview.vue";

const routes = [
  {
    path: "/",
    component: loginview,
  },
  {
    path: "/page",
    component: pageview,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

createApp(App).use(router).mount("#app");
