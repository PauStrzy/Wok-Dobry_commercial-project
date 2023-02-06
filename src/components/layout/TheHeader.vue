<script>
// import { RouterLink } from "vue-router";
import HelloWorld from "../HelloWorld.vue";
// import MenuBar from "../ui/MenuBar.vue";
import NavMobile from "./NavMobile.vue";
import NavDesktop from "./NavDesktop.vue";

export default {
  components: {
    // MenuBar,
    HelloWorld,
    NavMobile,
    NavDesktop,
  },
  // data() {
  //   return {
  //     vis: true,
  //   };
  // },
  // emits: ["toggleMenu"],
  // methods: {
  //   showAndHide() {
  //     this.vis = !this.vis;
  //   },
  // },
};
</script>

<template>
  <div class="wrapper">
    <hello-world msg="Wok Dobry"></hello-world>
    <!-- <menu-bar :vis="vis" @toggle-menu="showAndHide"></menu-bar> -->
    <!-- <nav class="screen" v-if="vis">
      <ul>
        <li><RouterLink to="/">Home</RouterLink></li>
        <li><RouterLink to="/menu">Menu</RouterLink></li>
        <li><a href="#">O nas</a></li>
        <li><a href="#">Dowozy</a></li>
        <li><a href="#">Galeria</a></li>
        <li><a href="#">Kontakt</a></li>
      </ul>
    </nav> -->
    <nav-desktop></nav-desktop>
    <nav-mobile></nav-mobile>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

/* nav.screen {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #fff;
  top: 0;
  left: 0;
  z-index: 100;
  transition: all 0.6s ease-in-out;
}
nav.screen::after {
  display: none;
}

ul {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
li {
  width: 100%;
}

ul li a {
  display: inline-block;
  text-align: center;
  font-size: 1.5rem;
  padding: 0.75rem 1.5rem;
  width: 100%;
  font-style: italic;
}

@media (min-width: 1400px) {
  header {
    display: flex;
    place-items: center;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav.screen {
    position: sticky;
    display: block;
    width: 100%;
    background: none;
    text-align: left;
    font-size: 1.5rem;
    padding: 1rem 0;
    margin: 1rem 0;
  }
  nav.screen::after {
    content: "";
    display: block;
    width: 100%;
    border-bottom: 1px solid var(--color-border);
  }

  ul {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  li {
    width: 100%;
    height: 100%;
  }

  ul li a {
    display: inline-block;
    text-align: center;
    font-size: 1.5rem;
    padding: 0.75rem 1.5rem;
    width: 100%;
    height: 100%;
    font-style: italic;
  }
} */
</style>
