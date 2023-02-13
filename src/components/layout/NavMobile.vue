<script>
import MenuBar from "../ui/MenuBar.vue";

export default {
  components: {
    MenuBar,
  },
  data() {
    return {
      vis: false,
    };
  },

  emits: ["toggleMenu"],
  methods: {
    showAndHide() {
      this.vis = !this.vis;
    },
  },
};
</script>

<template>
  <section class="nav-mobile">
    <div class="wrapper">
      <hello-world msg="Wok Dobry"></hello-world>
      <menu-bar :vis="vis" @toggle-menu="showAndHide"></menu-bar>
      <nav class="screen" :class="vis ? 'active' : null">
        <ul>
          <li><router-link to="/">O nas</router-link></li>
          <li><router-link to="/menu">Menu</router-link></li>
          <li><a href="#">Dowozy</a></li>
          <li><a href="#">Galeria</a></li>
          <li><a href="#">Kontakt</a></li>
        </ul>
      </nav>
    </div>
  </section>
</template>

<style scoped>
nav.screen {
  display: none;
}
@media (max-width: 1240px) {
  nav.screen {
    display: block;
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: #fff;
    top: 0;
    left: 100%;
    z-index: 100;
    transition: left 0.5s ease-out;
  }
  nav.screen.active {
    left: 0;
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
    /* font-style: italic; */
  }
}
</style>
