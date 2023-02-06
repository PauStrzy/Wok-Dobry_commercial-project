<script>
import PacmanLoader from "vue-spinner/src/PacmanLoader.vue";

export default {
  data() {
    return {
      color: "#cc181e",
    };
  },
  components: {
    PacmanLoader,
  },
};
</script>
<template>
  <div class="spinner">
    <pacman-loader :color="color"></pacman-loader>
  </div>
</template>
