import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    component: () => import("../views/home.vue"),
  },
  {
    path: "/category",
    component: () => import("../views/category.vue"),
  },
  {
    path: "/rank",
    component: () => import("../views/rank.vue"),
  },
  {
    path: "/search",
    component: () => import("../views/search.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});
export default router;
