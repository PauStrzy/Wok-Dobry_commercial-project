<script>
import LandingPageGallery from "../components/LandingPageGallery.vue";
import ContactUs from "../components/ContactUs.vue";
import MenuRepresentatives from "../components/MenuRepresentatives.vue";
import NewsletterModal from "../components/NewsletterModal.vue";

export default {
  components: {
    LandingPageGallery,
    ContactUs,
    NewsletterModal,
    MenuRepresentatives,
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
      this.showNewsletter = !this.showNewsletter;
    },
  },
  computed: {
    loaded() {
      return (this.isLoading = false);
    },
  },
  // mounted() {
  //   this.closeAndHideNewsletter();
  // },
};
</script>

<template>
  <div class="container" v-cloak>
    <Teleport to="body">
      <newsletter-modal
        :show="showNewsletter"
        @clicked="closeAndHideNewsletter"
        v-cloak
      ></newsletter-modal>
    </Teleport>
    <section id="home">
      <div class="wrapper">

        <div class="container-home">
          <div class="logo">
            <img src="../../img/logo_1.jpg" alt="logo Wok Dobry" />
          </div>

          <div class="gallery">
            <landing-page-gallery></landing-page-gallery>
          </div>
          <div class="slogan">
            <h2>
              Odkryj smaki<br />
              azjatyckiej kuchni
            </h2>
          </div>
        </div>
      </div>
    </section>
    <base-break></base-break>
    <menu-representatives></menu-representatives>
    <base-break></base-break>
    <contact-us></contact-us>
    <button class="show-newsletter" @click="closeAndHideNewsletter">
      Newsletter
    </button>
  </div>
</template>

<style scoped>
#home {
  padding-top: 2.5vh;
}
.wrapper {
  position: relative;
  width: 90vw;
  background-color: var(--white-pale);
  box-shadow: 0 0 0.5rem var(--color-border);
  border-radius: 0.5rem;
  overflow: hidden;
}

.container-home {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

section {
  text-align: center;
  min-height: 50vh;
}

.logo {
  position: relative;
  top: 1rem;
  left: 6rem;
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
  top: -1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
  height: 70%;
  width: 70%;
  z-index: 10;
}

.slogan {
  position: relative;
  top: -1rem;
  width: 90vw;
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
.show-newsletter {
  display: block;
  margin: 0 auto 3vh;
}

@media (min-width: 420px) {
  section {
    padding-bottom: 0;
  }
  .logo {

    left: 8rem;
    width: 8rem;
    height: 8rem;
  }
  #home {
    display: block;
    height: 70%;
  }
}
@media (min-width: 760px) {
  #home {
    padding-bottom: 1vh;
  }
}

@media (min-width: 992px) {
  #home {
    padding-bottom: 1vh;
  }
  .wrapper {
    max-width: 50%;
    margin: 0 auto;
  }
  
.gallery {
  top: -3rem;
}

  .slogan {
    align-self: flex-end;
    text-align: right;
    width: auto;
    padding: 0 10px;
    background-color: #ffffff94;
    top: -3vh;
    right: 2vh;
  }
  h2 {
    font-size: 1.3rem;
  }
  .show-newsletter {
    margin: 0 auto 5vh;
  }
}
@media (min-width: 1224px) {

  h2 {
    font-size: 2rem;
  }

  .slogan {
    top: -10vh;
    right: 5vh;
  }

  .logo {

    left: 10rem;
    width: 10rem;
    height: 10rem;
  }
}

@media (min-width: 1800px) {
  .logo {

    left: 12rem;
    width: 12rem;
    height: 12rem;
  }
}
</style>
