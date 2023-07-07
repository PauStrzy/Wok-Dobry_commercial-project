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
      <menu-bar :vis="vis" @toggle-menu="showAndHide"></menu-bar>
      <nav class="screen" :class="vis ? 'active' : null">
        <ul @click="showAndHide">
          <li><RouterLink to="/">O nas</RouterLink></li>
          <li><RouterLink to="/menu">Menu</RouterLink></li>
          <li><RouterLink to="/gallery">Galeria</RouterLink></li>
          <li><RouterLink to="/contactUs">Kontakt</RouterLink></li>
        </ul>
      </nav>
    </div>
  </section>
</template>

<style scoped>
.nav-mobile {
  display: none;

}
@media (max-width: 992px) {
  .nav-mobile {
    display: block;
  }
  nav.screen {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: var(--color-background);
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

    -webkit-text-stroke: 1.5px var(--swiper);
    -webkit-text-fill-color: var(--color-menu);
    color: transparent;
    text-transform: uppercase;
    font-weight: bold;
  }
}
</style>
