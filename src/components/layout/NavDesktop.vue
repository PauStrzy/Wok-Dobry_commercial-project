<script>
import { RouterLink } from "vue-router";
</script>

<template>
  <nav class="screen">
    <ul>
      <li><RouterLink to="/">Home</RouterLink></li>
      <li><RouterLink to="/menu">Menu</RouterLink></li>
      <li><a href="#">O nas</a></li>
      <li><a href="#">Dowozy</a></li>
      <li><a href="#">Galeria</a></li>
      <li><a href="#">Kontakt</a></li>
    </ul>
  </nav>
</template>

<style scoped>
nav.screen {
  display: none;
}

@media (min-width: 1400px) {
  nav.screen {
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
}
</style>
