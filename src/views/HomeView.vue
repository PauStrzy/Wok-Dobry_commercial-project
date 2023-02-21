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
    <!-- <button id="show-newsletter" @click="showNewsletter = true">
      Newsletter
    </button> -->
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

@media (min-width: 420px) {
  section {
    padding-top: 10vh;
    padding-bottom: 0;
    min-height: 80vh;
  }
  #home {
    display: block;
    height: 70%;
    width: 90%;
    margin: 0 auto;
  }
  .gallery {
    width: 45%;
  }
}

@media (min-width: 1240px) {
  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 50%;
  }
  section {
    padding-top: 0;
    padding-bottom: 0;
    min-height: 80vh;
  }
  #home {
    height: 100%;
  }

  .logo {
    left: -20vh;
    top: 1vh;
    width: 8rem;
    height: 8rem;
  }
  .gallery {
    top: -15vh;
    width: 25%;
  }
  .slogan {
    top: -7.5vh;
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
    top: 2vh;
    left: -20vh;
    width: 12rem;
    height: 12rem;
  }

  .gallery {
    top: -8vh;
    width: 30%;
  }
  .slogan {
    top: -4vh;
  }
}
</style>
