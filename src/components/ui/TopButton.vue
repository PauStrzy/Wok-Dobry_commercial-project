<script setup>
const props = defineProps({
  showTopButton: Boolean,
});
function toTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
</script>

<template>
  <div class="pagetop" @click="toTop" v-if="showTopButton">
    <font-awesome-icon icon="fa-solid fa-chevron-up" />
  </div>
</template>

<style scoped>
.pagetop {
  display: none;
}
@media (min-width: 992px) {
  .pagetop {
    display: block;
    position: fixed;
    right: 5vw;
    bottom: 5vw;
    cursor: pointer;
    background-color: #ffffff57;
    border-radius: 50%;
    width: 2.5rem;
    height: 2.5rem;
    text-align: center;
    transition: color 0.3s;
    z-index: 50000;
  }

  .fa-chevron-up {
    width: 70%;
    height: 100%;
  }
  .pagetop:hover {
    color: var(--color-hover);
  }
}
</style>
