import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("../modules/pokemon/pages/ListPage.vue"),
  },
  {
    path: "/about",
    component: () => import("../modules/pokemon/pages/AboutPage.vue"), //para la ruta perezosa
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
