<template>
  <section id="gallery">
    <h3 class="gallery-header">
      <span>Poznajmy się bliżej!</span>
      Znajdziesz tutaj zdjęcia naszych potraw, lokalu oraz załogi.
    </h3>
    <div class="wraper">
      <div class="img-container">
        <div class="arrow-prev"><p>&lt</p></div>
        <img src="" alt="" />
        <div class="arrow-next"><p>></p></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      src: null,
      attr: null,
    };
  },
};
</script>

<style scoped>
#gallery {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 5vh;
  padding-bottom: 5vh;
  height: 85vh;
  /* min-height: 50vh; */
}
.gallery-header {
  font-size: 0.8rem;
  width: 100%;
  padding: 0.8rem 0.4rem;
  background-color: var(--white-pale);
  box-shadow: 0 0 5px var(--color-border);
  border-radius: 5px;
  text-align: center;
  /* font-weight: bold; */
}
.gallery-header span {
  display: block;
  text-align: center;
  font-weight: bold;
  padding-bottom: 0.4rem;
}
.wraper {
  margin-top: 4vh;
  width: 100%;
  height: 60vh;
  /* background-color: var(--white-pale);
  box-shadow: 0 0 5px var(--color-border);
  border-radius: 5px; */
}
.img-container {
  margin: 0 auto;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
img {
  width: 40vh;
  height: 60vh;
  background-color: #fff;
  box-shadow: 0 0 5px var(--color-border);
  border-radius: 5px;
}
.arrow-prev,
.arrow-next {
  font-size: 4rem;
  color: rgba(255, 255, 255, 0.247);
}
</style>
