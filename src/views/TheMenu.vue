<template>
  <section class="menu">
    <div class="menu">
      <h2 class="menu">
        Pobierz<a href="/menu"><span>Menu</span></a>
      </h2>
    </div>
  </section>
</template>
<!-- <script>
import { watch } from "vue";
import { useRoute, useRouter } from "vue-router";
export default {
  setup() {
    const route = useRoute();
    const router = useRouter();

    watch(route, () => {
      // router.push("/");
    });
  },
};
</script> -->

<style scoped>
div.menu {
  margin: 0 auto;
}
h2.menu {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 2rem;
  padding: 2rem 0;
  text-transform: uppercase;
}

h2.menu span {
  font-size: 2rem;
  text-decoration: underline;
}
@media (min-width: 760px) {
  h2.menu {
    flex-direction: row;
    font-size: 3rem;
  }
  h2.menu span {
    padding: 0 1rem;
    font-size: 3rem;
  }
}
</style>
