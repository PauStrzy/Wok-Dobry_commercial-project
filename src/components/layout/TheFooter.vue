<template>
  <footer>
    <div class="wrapper">
      <p>
        © {{ currentDate }} <span>WOK DOBRY</span> | kuchnia azjatycka - Kwidzyn
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  computed: {
    currentDate() {
      const date = new Date().getFullYear();
      return date;
    },
  },
};
</script>

<style scoped>
footer {
  position: absolute;
  background-color: var(--white-pale);
  width: 100%;
  bottom: 0;
}
.wrapper {
  width: 100%;
  text-align: center;
  box-shadow: 0 0 5px var(--color-border);
  height: 4vh;
}

p {
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 0.6rem;
  text-transform: uppercase;
}
span {
  font-weight: bold;
}
@media (min-width: 992px) {
  p {
    font-size: 0.8rem;
  }
}
</style>
