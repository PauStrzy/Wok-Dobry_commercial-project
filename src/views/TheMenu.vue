<template>
  <section class="menu">
    <div class="menu">
      <h2 class="menu">Sprawdź aktualne <span>Menu</span></h2>
    </div>
  </section>
</template>
<script>
import { watch } from "vue";
import { useRoute, useRouter } from "vue-router";
export default {
  setup() {
    const route = useRoute();
    const router = useRouter();

    watch(route, (_, _2) => {
      router.push("/");
    });
  },
};
</script>

<style scoped>
div.menu {
  display: flex;
  justify-content: center;
}
h2.menu {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 2rem;
  text-transform: uppercase;
}

h2.menu span {
  font-size: 4rem;
}
</style>
