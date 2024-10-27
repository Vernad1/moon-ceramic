import { createWebHistory, createRouter } from "vue-router";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: "home",
      path: "/",
      component: () => import("./pages/HomePage.vue"),
    },
  ],
});
