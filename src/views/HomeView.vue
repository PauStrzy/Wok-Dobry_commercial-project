<script>
import LandingPageGallery from "../components/LandingPageGallery.vue";
import ContactUs from "../components/ContactUs.vue";
import NewsletterModal from "../components/NewsletterModal.vue";

export default {
  components: {
    LandingPageGallery,
    ContactUs,
    NewsletterModal,
  },
  data() {
    return {
      isLoading: true,
      showNewsletter: false,
      hideNewsletter: false,
    };
  },
  methods: {
    closeAndHideNewsletter() {
      this.showNewsletter = this.showNewsletter;
    },
  },
  computed: {
    loaded() {
      return (this.isLoading = false);
    },
  },
  mounted() {
    this.closeAndHideNewsletter();
  },
};
</script>

<template>
  <div class="container" v-cloak>
    <Teleport to="body">
      <newsletter-modal
        :show="showNewsletter"
        @close="closeAndHideNewsletter"
        v-cloak
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
          <landing-page-gallery></landing-page-gallery>
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
      <button id="show-newsletter" @click="closeAndHideNewsletter">
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
  min-height: 60vw;
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
  padding-bottom: 5vh;
}
#show-newsletter,
#show-newsletter:focus {
  padding: 0.5rem 1rem;
  font: inherit;
  border: 2px solid var(--color-header);
  color: var(--color-border-hover);
  font-weight: bold;
  border-radius: 8px;
  font-size: 1rem;
  padding: 0.4rem 0.8rem;
  background-color: var(--color-header);
  cursor: pointer;
  transition: all 0.3s ease;
}
#show-newsletter:hover,
#show-newsletter:active {
  background-color: var(--color-background-pale);
  color: var(--color-header);
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
  #home {
    padding-top: 1vh;
    padding-bottom: 1vh;
  }
}

@media (min-width: 992px) {
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
    min-height: 50vh;
  }

  .logo {
    top: 0;
    padding-top: 2vh;
    left: -15vh;
    width: 7rem;
    height: 7rem;
  }
  .gallery {
    top: -5vh;
    width: 40%;
    min-height: 60vh;
  }

  .slogan {
    align-self: flex-end;
    text-align: right;
    top: -3vh;
    right: 2vh;
  }
  h2 {
    font-size: 1.3rem;
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
@media (min-width: 1224px) {
  .logo {
    left: -20vh;
    width: 8rem;
    height: 8rem;
  }

  .slogan {
    top: -5vh;
    right: 5vh;
  }
}
@media (min-width: 1800px) {
  h2 {
    font-size: 2rem;
  }
  .logo {
    padding-top: 5vh;
    left: -20vh;
    width: 12rem;
    height: 12rem;
  }
  .gallery {
    top: -5vh;
  }

  .slogan {
    top: -5vh;
    right: 5vh;
  }
}
</style>
