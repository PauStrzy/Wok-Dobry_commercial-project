<script setup>
const loading = false;
</script>

<template>
  <div class="wrapper">
    <div class="logo">
      <img src="../../img/logo_1.png" alt="logo Wok Dobry" />
    </div>

    <div class="gallery">
      <div v-if="loading">
        <base-spinner></base-spinner>
      </div>
      <div v-if="!loading" class="img2">
        <img src="../../img/inside_3.png" alt="picture of Wok Dobry" />
      </div>
    </div>
    <div class="slogan">
      <h2>Odkryj smaki azjatyckiej kuchni</h2>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem;
}
.logo {
  position: relative;
  right: 25%;
  width: 8rem;
  height: 8rem;
}
.logo img {
  width: 100%;
  border-radius: 50%;
  z-index: 10;
}

.gallery {
  position: relative;
  top: -10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15rem;
  height: 20rem;
  box-shadow: 0.2em 0.2em 0.8em rgb(255, 21, 21),
    -0.2em -0.2em 0.8em rgb(0, 183, 255);
}

.gallery img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.slogan {
  position: relative;
  padding: 0 1rem 0 1rem;
  top: -10vh;
  text-align: center;
  background-color: rgba(245, 111, 111, 0.507);
  z-index: 30;
}
h2 {
  font-size: 1.5rem;
  text-transform: uppercase;
}

@media (min-width: 1240px) {
  .wrapper {
    display: grid;
    max-height: 100vh;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(10, 1fr);
  }
  .logo {
    position: static;
    top: 0;
    width: 15rem;
    height: 15rem;
    /* border: 1px solid red; */
    grid-column: 2/4;
    grid-row: 1/3;
  }
  .gallery {
    position: static;
    top: 0;
    width: 25rem;
    height: 35rem;
    grid-column: 4/7;
    grid-row: 2/8;
  }

  .slogan {
    position: static;
    padding: 0 0 0 1rem;
    top: 0;
    text-align: left;
    grid-column: 6/11;
    grid-row: 5/8;
  }
  h2 {
    font-size: 3rem;
    text-transform: uppercase;
    word-spacing: 1rem;
  }
}
@media (min-width: 2000px) {
  .slogan {
    grid-column: 6/10;
  }
}
</style>
