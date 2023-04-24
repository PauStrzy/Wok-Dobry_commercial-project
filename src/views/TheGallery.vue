<template>
  <section id="gallery">
    <h3 class="gallery-header">
      <span>Poznajmy się bliżej,</span>
      Znajdziesz tutaj zdjęcia naszych potraw, lokalu oraz załogi.
    </h3>
    <div class="wrapper">
      <div id="slides" class="slides">
        <transition name="slide-fade">
          <figure :key="currentSlide">
            <img
              :src="slides[currentSlide].src"
              :alt="slides[currentSlide].attr"
            />
            <figcaption>{{ slides[currentSlide].caption }}</figcaption>
            <div class="arrow-prev" @click="prevImg()"><p>&laquo;</p></div>
            <div class="arrow-next" @click="nextImg()"><p>&raquo;</p></div>
          </figure>
        </transition>
      </div>
      <nav>
        <ul>
          <li>
            <button
              :id="n"
              class="pin"
              v-for="n in this.slides.length"
              :class="{ selected: n - 1 === this.currentSlide }"
              @click="changeSlide(n)"
            ></button>
          </li>
        </ul>
        <button
          id="play"
          class="play"
          :class="{ on: this.play }"
          @click="playOnOff()"
        ></button>
      </nav>
    </div>
  </section>
</template>

<script>
import img1 from "../../img/IMG_0216.jpg";
import img2 from "../../img/IMG_0225.jpg";
import img3 from "../../img/IMG_0267.jpg";
import img4 from "../../img/IMG_0308.jpg";
import img5 from "../../img/IMG_0322.jpg";
import img6 from "../../img/IMG_0432.jpg";
import img7 from "../../img/IMG_0555.jpg";
import img8 from "../../img/IMG_0563.jpg";
import img9 from "../../img/IMG_0574.jpg";
import img10 from "../../img/IMG_0582.jpg";

export default {
  data() {
    return {
      slides: [
        {
          src: img1,
          attr: "Tom Yum soup in a bowl",
          caption: "Tom Yum - pikantna, azjatycka zupa",
        },
        {
          src: img2,
          attr: "Tom Kha soup in a bowl",
          caption: "Tom Kha - aromatyczna zupa z mleczkiem kokosowym",
        },
        {
          src: img3,
          attr: "Curry with shrimps in a bowl",
          caption: "Curry z krewetkami",
        },
        {
          src: img4,
          attr: "Shrimps in tempura in a bowl",
          caption: "Krewetki w tempurze",
        },
        {
          src: img5,
          attr: "Chicken satay in a bowl",
          caption: "Chicken Satay - szaszłyki z kurczakiem",
        },
        {
          src: img6,
          attr: "Bowl with shrimps",
          caption: "Bowl z krewetkami",
        },
        {
          src: img7,
          attr: "Pad thai with shrimps",
          caption: "Pad Thai - smażony makaron ryżowy z krewetkami",
        },
        {
          src: img8,
          attr: "Fried noodles with tofu",
          caption: "Smażony makaron z tofu",
        },
        {
          src: img9,
          attr: "Fried noodles with shrimps",
          caption: "Smażony makaron z krewetkami",
        },
        {
          src: img10,
          attr: "Chicken cashew in a bowl on a table",
          caption: "Chicken Cashew - kurczak z nerkowcami",
        },
      ],
      currentSlide: 0,
      slideShow: null,
      play: false,
    };
  },
  methods: {
    nextImg() {
      if (this.currentSlide < this.slides.length - 1) {
        this.currentSlide++;
      } else {
        this.currentSlide = 0;
      }
    },
    prevImg() {
      if (this.currentSlide > 0) {
        this.currentSlide--;
      } else {
        this.currentSlide = this.slides.length - 1;
      }
    },
    changeSlide(n) {
      this.currentSlide = n - 1;
    },
    playOnOff() {
      this.play = !this.play;
      clearInterval(this.slideShow);
      if (this.play) {
        this.slideShow = setInterval(this.nextImg, 5000);
      }
    },
  },
  mounted() {
    this.playOnOff();
  },
};
</script>

<style scoped>
.slide-fade-enter,
.slide-fade-leave-to {
  opacity: 0;
}
#gallery {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 2.5vh;
  padding-bottom: 5vh;
  min-height: 80vh;
}
.gallery-header {
  font-size: 0.8rem;
  width: 100%;
  padding: 0.4rem 0.2rem;
  background-color: var(--white-pale);
  box-shadow: 0 0 5px var(--color-border);
  border-radius: 5px;
  text-align: center;
  text-transform: lowercase;
}
.gallery-header span {
  display: block;
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
  padding: 0.2rem 0;
}
.wrapper {
  margin-top: 4vh;
  width: 100%;
  height: 100%;
}
.slides {
  position: relative;
  display: block;
  margin: 0 auto;
  width: 100%;
  height: 60vh;
}
.slides:focus {
  outline: 0;
}
.slides figure {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  transition: opacity 1s ease-out;
}
.slides figure:first-child {
  position: relative;
}

.slides figcaption {
  position: absolute;
  text-align: center;
  bottom: 0.75rem;
  right: 0;
  left: 0;
  padding: 0.2rem 0;
  font-size: 0.8rem;
  color: var(--color-text);
  background: rgba(255, 217, 217, 0.418);
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
}
.arrow-prev,
.arrow-next {
  position: absolute;
  display: block;
  width: 40px;
  height: 40px;
  text-align: center;
  top: calc(50% - 40px / 2);
  font-size: 50px;
  cursor: pointer;
  opacity: 0.7;
  z-index: 4;
  line-height: 40px;
  color: var(--color-border);
  transition: color 0.3s ease-out;
}
.arrow-prev:hover,
.arrow-prev:active,
.arrow-next:hover,
.arrow-next:focus {
  color: var(--text-light-1);
}
.arrow-prev {
  left: 0;
  padding: 0px 10px 0px 5px;
}

.arrow-next {
  right: 0;
  padding: 0px 5px 0px 10px;
}
nav {
  text-align: center;
  line-height: 1rem;
  position: relative;
}
nav button {
  position: relative;
  border: none;
  outline: none;
}
nav ul > li {
  display: inline-block;
  list-style-type: none;
}
nav ul > li button {
  margin: 0;
  padding: 0;
  width: 15px;
  height: 20px;
  line-height: 2rem;
  font-size: 2rem;
  opacity: 0.6;
  background: none;
  -webkit-text-stroke: 1.9px var(--color-header);
  -webkit-text-fill-color: var(--color-background);
  cursor: pointer;
  transition: opacity 0.3s ease-out;
}
nav ul > li button:hover,
nav button.play:hover,
nav button.play:active {
  opacity: 1;
}
nav button.play {
  position: absolute;
  right: 0;
  bottom: 0;
  background: none;
  width: 30px;
  height: 20px;
  font-size: 1.5rem;
  line-height: 1.5rem;
  color: transparent;
  -webkit-text-stroke: 1.5px var(--color-header);
  opacity: 0.6;
  transition: opacity 0.3s ease-out;
  cursor: pointer;
}

nav button.play:before {
  content: "\25B6";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}
nav button.play.on:before {
  content: "\2225";
}
nav ul > li button:before {
  content: "\2022";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}

nav ul > li button.selected {
  opacity: 1;
}

@media (min-width: 992px) {
  .gallery-header {
    font-size: 1rem;
    max-width: 1200px;
  }
  .wrapper {
    max-width: 1200px;
  }
  .gallery-header {
    font-size: 1rem;
  }

  .slides figcaption {
    font-size: 1.2rem;
  }
}
</style>
