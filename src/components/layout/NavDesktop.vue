<script>
import { RouterLink } from "vue-router";
</script>

<template>
  <section class="nav-desktop" ref="nav">
    <nav class="screen">
      <ul>
        <li><RouterLink to="/">O nas</RouterLink></li>
        <li><a href="#menu">Menu</a></li>
        <li><a href="#">Dowozy</a></li>
        <li><a href="#">Galeria</a></li>
        <li><a href="#contact-us">Kontakt</a></li>
      </ul>
    </nav>
  </section>
</template>

<style scoped>
.nav-desktop {
  display: none;
}

@media (min-width: 992px) {
  .nav-desktop {
    display: block;
    padding: 0;
  }
  nav.screen {
    background-color: var(--background-dark-transparent);
    position: fixed;
    top: 0;
    right: 0;
    width: 61.05%;
    height: 10vh;
    padding-right: 5vw;
    /* box-shadow: 0 0 4px var(--color-menu); */
    z-index: 100000;
  }

  ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100%;
    line-height: 10vh;
  }
  li {
    width: 100%;
    height: 100%;
  }

  ul li a {
    display: inline-block;
    text-align: center;
    font-size: 1.2rem;
    width: 100%;
    height: 100%;
    text-transform: uppercase;
    text-decoration: none;
    transform: scale(1);
    color: transparent;
    -webkit-text-stroke: 1.3px var(--color-menu);
    letter-spacing: 0.2rem;
    transition: all 0.5s;
  }
  ul li a:hover {
    letter-spacing: 0.3rem;
    -webkit-text-stroke: 0.3px var(--color-menu);
    -webkit-text-fill-color: var(--swiper);
  }
}
@media (min-width: 1800px) {
  ul li a {
    font-size: 1.5rem;
  }
}
</style>
