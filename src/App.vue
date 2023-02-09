<script>
import { RouterView } from "vue-router";

import TheHeader from "./components/layout/TheHeader.vue";
export default {
  components: {
    TheHeader,
  },
};
</script>

<template>
  <TheHeader />
  <RouterView />
</template>
