import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TheMenu from "../views/TheMenu.vue";
import TheGallery from "../views/TheGallery.vue";
import ContactUs from "../components/ContactUs.vue";

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
    {
      path: "/gallery",
      name: "gallery",
      component: TheGallery,
    },
    {
      path: "/contactUs",
      name: "contactUs",
      component: ContactUs,
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
