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
      <hello-world msg="Wok Dobry"></hello-world>
      <nav-desktop></nav-desktop>
      <nav-mobile></nav-mobile>
    </div>
  </section>
</template>

<style scoped>
header {
  line-height: 1.5;
}
</style>
