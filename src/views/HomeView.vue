<script>
import TheGallery from "../components/TheGallery.vue";
import ContactUs from "../components/ContactUs.vue";
import NewsletterModal from "../components/NewsletterModal.vue";

export default {
  components: {
    TheGallery,
    ContactUs,
    NewsletterModal,
  },
  data() {
    return {
      isLoading: true,
      showNewsletter: false,
    };
  },
  computed: {
    loaded() {
      return (this.isLoading = false);
    },
  },
  mounted() {
    this.showNewsletter = true;
  },
};
</script>

<template>
  <div class="container">
    <Teleport to="body">
      <newsletter-modal
        :show="showNewsletter"
        @close="showNewsletter = false"
      ></newsletter-modal>
    </Teleport>
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
      <button id="show-newsletter" @click="showNewsletter = true">
        Newsletter
      </button>
    </section>
  </div>
</template>

<style scoped>
#home {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 5vh;
  padding-bottom: 5vh;
  height: 100%;
  min-height: 70vh;
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
  width: 6rem;
  height: 6rem;
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
  font-weight: 400;
  font-size: 1.3rem;
  word-spacing: 0.3rem;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
}
#contact-us {
  padding-bottom: 5vh;
}
#show-newsletter {
  padding: 0.5rem 1rem;
  font: inherit;
  border: 2px solid var(--color-hover);
  color: inherit;
  font-weight: bold;
  border-radius: 8px;
  font-size: 1rem;
  padding: 0.4rem 0.8rem;
  background-color: #f5e6e6;
  cursor: pointer;
  transition: all 0.3s ease;
}
#show-newsletter:hover,
#show-newsletter:active {
  background-color: var(--color-background-pale);
  color: var(--color-hover);
}
@media (min-height: 800px) {
}
@media (min-width: 420px) {
  section {
    padding-top: 5vh;
    padding-bottom: 0;
    min-height: 80vh;
  }
  .logo {
    width: 8rem;
    height: 8rem;
  }
  #home {
    display: block;
    height: 70%;
  }
  .gallery {
    width: 45%;
  }
}
@media (min-width: 760px) {
  section {
    padding-top: 10vh;
    padding-bottom: 0;
  }
}

@media (min-width: 1240px) {
  #home {
    height: 100%;
    padding-top: 1vh;
    padding-bottom: 1vh;
  }
  .wrapper {
    max-width: 50%;
    margin: 0 auto;
  }
  section {
    padding-top: 0;
    padding-bottom: 0;
    min-height: 80vh;
  }

  .logo {
    left: -20vh;
    top: 1vh;
    width: 8rem;
    height: 8rem;
  }
  .gallery {
    top: -8vh;
    width: 40%;
  }
  .slogan {
    top: -4vh;
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
  #contact-us {
    padding-bottom: 10vh;
  }
}
@media (min-width: 1800px) {
  h2 {
    font-size: 3rem;
    word-spacing: 0.5rem;
  }
  .logo {
    top: 2vh;
    left: -20vh;
    width: 12rem;
    height: 12rem;
  }

  .slogan {
    top: -4vh;
  }
}
</style>
