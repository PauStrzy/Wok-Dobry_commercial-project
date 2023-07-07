<script setup>
import { ref, onBeforeMount } from "vue";
import { RouterView } from "vue-router";
import TheHeader from "./components/layout/TheHeader.vue";
import TheFooter from "./components/layout/TheFooter.vue";
import TopButton from "./components/ui/TopButton.vue";




onBeforeMount(() => {
  window.addEventListener("scroll", onScroll);
});

const showTopButton = ref(false);
function onScroll() {
  showTopButton.value = !!window.scrollY;
}
</script>

<template>
 
  <TheHeader />

  <router-view v-slot="slotProps">
    <transition name="slide-fade" mode="out-in">
      <component :is="slotProps.Component" />
    </transition>
  </router-view>
  <TopButton :showTopButton="showTopButton" />
  <TheFooter />

</template>

<style>
.slide-fade-enter-active {
  transition: all 0.5s ease-out;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
}
</style>
