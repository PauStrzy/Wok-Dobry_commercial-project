<script>
import HelloWorld from "../HelloWorld.vue";
import NavMobile from "./NavMobile.vue";
import NavDesktop from "./NavDesktop.vue";

export default {
  components: {
    HelloWorld,
    NavMobile,
    NavDesktop,
  },
};
</script>

<template>
  <section class="header">
    <div class="wrapper">
      <hello-world></hello-world>
      <nav-desktop></nav-desktop>
      <nav-mobile></nav-mobile>
    </div>
  </section>
</template>

<style scoped>
.wrapper {
  width: 80vw;
  margin: 0 auto;
  padding-top: 2.5vh;
}

@media (min-width: 992px) {
  .header {
    width: 100vw;
    height: 10vh;
  }
  .wrapper {
    padding-top: 0;
    position: fixed;
    top: -2px;
    left: 0;
    background-color: var(--background-dark-transparent);
    box-shadow: 0 5px 5px var(--background-darker);
    height: 10vh;
    width: 100%;
    z-index: 100000;
  }
}
@media (min-width: 1600px) {
  .wrapper {
    width: 100%;
  }
}
</style>
