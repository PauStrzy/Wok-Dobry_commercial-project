<script>
import { RouterLink } from "vue-router";
import TheMenu from "./TheMenu.vue";
import TheGallery from "../components/ui/TheGallery.vue";

export default {
  components: {
    TheMenu,
    TheGallery,
  },
  data() {
    return {
      isLoading: true,
    };
  },
  computed: {
    loaded() {
      this.isLoading = false;
    },
  },
};
</script>

<template>
  <section class="home">
    <div class="wrapper">
      <div class="logo">
        <img src="../../img/logo_1.png" alt="logo Wok Dobry" />
      </div>

      <div class="gallery">
        <!-- <div v-if="isLoading">
          <base-spinner></base-spinner>
        </div> -->
        <the-gallery></the-gallery>
      </div>

      <div class="slogan">
        <div class="shadow">
          <h2>Odkryj smaki azjatyckiej kuchni</h2>
        </div>
      </div>
    </div>
  </section>
  <div class="break">
    <img src="../../img/leaves12.png" alt="leafs background" />
    <img src="../../img/leaves13.png" alt="leafs background" />
    <img src="../../img/leaves12.png" alt="leafs background" />
  </div>
  <section class="menu">
    <RouterLink to="/menu"><the-menu></the-menu></RouterLink>
  </section>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.logo {
  position: relative;
  top: 0;
  right: 25%;
  width: 8rem;
  height: 8rem;
}
.logo img {
  width: 100%;
  border-radius: 50%;
  z-index: 20;
}

.gallery {
  position: relative;
  top: -10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50vw;
  height: auto;
  z-index: 10;
}

.slogan {
  position: relative;
  padding: 0 1rem 0 1rem;
  top: -10vh;
  width: 80vw;

  text-align: center;
  background-color: rgba(255, 243, 243, 0.719);
  z-index: 30;
  padding: 1rem 0;
}
h2 {
  font-size: 1rem;
  word-spacing: 0.5rem;
  letter-spacing: 0.2rem;
  text-transform: uppercase;
}

.break {
  margin: 1rem 0;
  width: 100%;
  overflow: hidden;
}
.break img {
  object-fit: cover;
  width: 33%;
  height: 33%;
}
section.menu {
  text-align: center;
}

@media (min-width: 1240px) {
  section {
    padding-top: 0;
    padding-bottom: 0;
    min-height: 80vh;
  }
  .wrapper {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(5, 1fr);
  }
  .logo {
    position: static;
    top: 0;
    width: 11rem;
    height: 11rem;
    grid-column: 4/6;
    grid-row: 1/3;
  }
  .gallery {
    position: static;
    top: 0;
    width: 100%;
    grid-column: 5/8;
    grid-row: 1/7;
  }

  .slogan {
    position: static;
    padding: 0 0 0 1rem;
    top: 0;
    width: 100%;
    text-align: left;
    grid-column: 6/10;
    grid-row: 4/6;
  }
  h2 {
    font-size: 2rem;
    word-spacing: 0.4rem;
    letter-spacing: 0.1rem;
  }
  section.home {
    padding-bottom: 0;
  }
}
@media (min-width: 1800px) {
  .wrapper {
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(7, 1fr);
  }
  .slogan {
    grid-column: 6/10;
    grid-row: 5/7;
  }
  h2 {
    font-size: 2.5rem;
    word-spacing: 1rem;
  }
  .logo {
    position: static;
    top: 0;
    width: 15rem;
    height: 15rem;
    grid-column: 3/5;
    grid-row: 1/3;
  }
  .gallery {
    position: static;
    width: 100%;
    height: 100%;
    top: 0;
    grid-column: 4/8;
    grid-row: 1/8;
  }
  section.home {
    padding-bottom: 0;
  }
}
</style>
