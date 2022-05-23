import Catalog from "@/pages/catalogPage.vue";
import Home from "@/pages/homePage.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/catalog",
    name: "Catalog",
    component: Catalog,
  },
];

export default createRouter({
  history: createWebHistory(),
  routes: routes,
});
