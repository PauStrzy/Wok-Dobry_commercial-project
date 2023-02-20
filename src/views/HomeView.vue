<script>
import { RouterLink } from "vue-router";

import TheMenu from "./TheMenu.vue";
import TheGallery from "../components/TheGallery.vue";
import ContactUs from "../components/ContactUs.vue";

export default {
  components: {
    TheMenu,
    TheGallery,
    ContactUs,
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
  <div class="container">
    <section id="home">
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
            <h2>
              Odkryj smaki<br />
              azjatyckiej kuchni
            </h2>
          </div>
        </div>
      </div>
    </section>
    <base-break></base-break>
    <section id="menu">
      <p>Sprawdź aktualne</p>
      <RouterLink to="/menu"><h3>MENU</h3></RouterLink>
    </section>
    <base-break></base-break>
    <section id="contact-us">
      <contact-us></contact-us>
    </section>
  </div>
</template>

<style scoped>
#home {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
}
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: var(--white-pale);
  box-shadow: 0 0 5px var(--color-border);
  border-radius: 5px;
}

section {
  text-align: center;
  min-height: 50vh;
}

.logo {
  position: relative;
  top: 5vh;
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
  top: -5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50vw;
  height: auto;
  z-index: 10;
}

.slogan {
  position: relative;
  top: -2.5vh;
  width: 80vw;
  text-align: center;
  z-index: 30;
}
h2 {
  font-family: fantasy;
  font-size: 1.5rem;
  word-spacing: 0.5rem;
  letter-spacing: 0.2rem;
  text-transform: uppercase;
}
#contact-us {
  padding-bottom: 5vh;
}

@media (min-width: 1240px) {
  section {
    padding-top: 0;
    padding-bottom: 0;
    min-height: 80vh;
  }
  #home {
    display: block;
    height: 100%;
    width: 90%;
    margin: 0 auto;
  }

  .logo {
    left: -25vh;
    width: 11rem;
    height: 11rem;
  }
  .gallery {
    width: 25%;
  }

  h2 {
    font-size: 2rem;
    word-spacing: 0.4rem;
    letter-spacing: 0.3rem;
  }
  #menu {
    font-size: 1.5rem;
    background-color: var(--white-pale);
    box-shadow: 0 0 5px var(--color-border);
    border-radius: 5px;
    width: 83%;
    padding: 4rem 0;
    margin: 4rem auto;
  }
  #menu h3 {
    text-decoration: underline;
  }
}
@media (min-width: 1800px) {
  h2 {
    font-size: 3rem;
    word-spacing: 0.5rem;
  }
  .logo {
    width: 15rem;
    height: 15rem;
  }
}
</style>
