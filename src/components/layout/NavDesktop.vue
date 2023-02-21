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
nav.screen {
  display: none;
}

@media (min-width: 1240px) {
  nav.screen {
    display: block;
    /* position: fixed;
    top: 13%;
    left: 10%;
    right: 10%;
    width: 80%; */
    background-color: var(--white-pale);
    box-shadow: 0 0 4px var(--color-border);
    z-index: 100000;
  }

  ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  li {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    height: 100%;
  }

  ul li a {
    display: inline-block;
    text-align: center;
    font-size: 1.2rem;
    padding: 0.4rem 0;
    width: 100%;
    height: 100%;
    text-transform: uppercase;
    text-decoration: none;
    transform: scale(1);
    border-bottom: 1px solid;
    border-top: 1px solid;
    border-color: var(--color-border);
    color: transparent;
    -webkit-text-stroke: 1.5px var(--text-light-2);
    letter-spacing: 0.2rem;
    transition: letter-spacing 0.4s;
  }
  ul li a:hover {
    letter-spacing: 0.3rem;
  }
}
@media (min-width: 1800px) {
  ul li a {
    font-size: 1.5rem;
    padding: 0.5rem 0;
  }
}
</style>
