import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TheMenu from "../views/TheMenu.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/menu",
      name: "menu",
      component: TheMenu,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    // if (to.hash) {
    //   return {
    //     el: to.hash,
    //     behavior: "smooth",
    //   };
    // }
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
