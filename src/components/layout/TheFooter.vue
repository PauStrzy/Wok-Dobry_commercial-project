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
      const current = new Date();
      const date = current.getFullYear();
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
  box-shadow: 0 0 2px var(--color-border);
  height: 4vh;
}
/* .wrapper::before {
  content: "";
  display: block;
  box-shadow: 0 0 1px 0 var(--color-border);
  width: 100%;
} */
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
@media (min-width: 1240px) {
  .wrapper {
    box-shadow: 0 0 5px var(--color-border);
    height: 5vh;
  }
  p {
    font-size: 0.8rem;
  }
}
</style>
