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
header {
  line-height: 1.5;
}
.wrapper {
  width: 80vw;
  margin: 0 auto;
}

@media (min-width: 1240px) {
  .wrapper {
    width: 100%;
  }
}
@media (min-width: 1600px) {
  .wrapper {
    width: 100%;
  }
}
</style>
