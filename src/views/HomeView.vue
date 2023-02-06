<script setup>
const loading = false;
</script>

<template>
  <div class="wrapper">
    <div class="logo">
      <img src="" alt="logo Wok Dobry" />
    </div>

    <div class="gallery">
      <div v-if="loading">
        <base-spinner></base-spinner>
      </div>
      <div v-if="!loading" class="img2">
        <img src="" alt="picture of Wok Dobry" />
      </div>
    </div>
    <div class="slogan">
      <h2>Odkryj smaki azjatyckiej kuchni</h2>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.logo {
  display: none;
  width: 10rem;
  height: 10rem;
  border: 1px solid red;
}

.gallery {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15rem;
  height: 20rem;
  border: 1px solid red;
}
h2 {
  font-size: 2rem;
  text-transform: uppercase;
  -webkit-text-stroke: 2px #db1616;
  -webkit-text-fill-color: #db161667;
  color: transparent;
}
.slogan {
  margin-top: 1rem;
  text-align: right;
}

@media (min-width: 1400px) {
  .wrapper {
    display: grid;
    max-height: 100vh;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(10, 1fr);
  }
  .logo {
    display: block;
    width: 10rem;
    height: 10rem;
    border: 1px solid red;
    grid-column: 2/3;
    grid-row: 1/3;
  }
  .gallery {
    width: 25rem;
    height: 35rem;
    grid-column: 4/6;
    grid-row: 3/8;
  }
  h2 {
    font-size: 3rem;
    text-transform: uppercase;
  }
  .slogan {
    text-align: left;
    grid-column: 6/10;
    grid-row: 4/6;
    padding-left: 2rem;
  }
}
</style>
