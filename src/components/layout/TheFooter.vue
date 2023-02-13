<template>
  <div class="wrapper">
    <p>
      <span>©</span> Wok Dobry <span>{{ currentDate }}</span>
    </p>
  </div>
</template>

<script>
export default {
  computed: {
    currentDate() {
      const current = new Date();
      const date = current.getFullYear();
      return date;
    },
  },
};
</script>

<style scoped>
.wrapper {
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
  min-height: 5vh;
  font-weight: bold;
}
.wrapper::before {
  content: "";
  display: block;
  margin-top: 1rem;
  border-top: 1px solid var(--color-border);
  width: 100%;
}
p {
  /* font-weight: bold; */
  font-weight: 500;
  font-size: 0.8rem;
  text-transform: uppercase;
  height: 100%;
  padding: 0.2rem 0;
}
</style>
