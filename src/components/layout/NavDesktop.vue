<script>
import { RouterLink } from "vue-router";
</script>

<template>
  <section class="nav-desktop">
    <nav class="screen">
      <ul>
        <li><RouterLink to="/">O nas</RouterLink></li>
        <li>
          <RouterLink to="/menu"><span>Menu</span></RouterLink>
        </li>
        <li><a href="#">Dowozy</a></li>
        <li><a href="#">Galeria</a></li>
        <li><a href="#">Kontakt</a></li>
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
    border-bottom: 2px solid var(--color-border);
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
    text-transform: uppercase;
    text-decoration: none;
    color: var(--color-text);
    transform: scale(1);
    transition: color 0.3s linear, transform 0.3s linear;
  }
  ul li a:hover {
    color: var(--color-hover);
    transform: scale(1.1);
  }
}
</style>
