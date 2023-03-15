<template>
  <section id="gallery">
    <h3 class="gallery-header">
      <span>Poznajmy się bliżej,</span>
      Znajdziesz tutaj zdjęcia naszych potraw, lokalu oraz załogi.
    </h3>
    <div class="wrapper">
      <div id="slides" class="slides">
        <figure id="slide0">
          <img
            :src="slides.src[currentSlide]"
            :alt="slides.attr[currentSlide]"
          />

          <figcaption>{{ slides.caption[currentSlide] }}</figcaption>
          <div class="arrow-prev" @click="prevImg()"><p>&laquo;</p></div>
          <div class="arrow-next" @click="nextImg()"><p>&raquo;</p></div>
        </figure>
      </div>
      <nav>
        <ul>
          <li>
            <button
              :id="n"
              class="pin"
              v-for="n in this.slides.src.length"
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
export default {
  data() {
    return {
      slides: {
        src: [
          "../../img/IMG_0216.jpg",
          "../../img/IMG_0225.jpg",
          "../../img/IMG_0267.jpg",
          "../../img/IMG_0308.jpg",
          "../../img/IMG_0322.jpg",
          "../../img/IMG_0432.jpg",
          "../../img/IMG_0555.jpg",
          "../../img/IMG_0563.jpg",
          "../../img/IMG_0574.jpg",
          "../../img/IMG_0582.jpg",
        ],
        attr: [
          "Tom Yum soup in a bowl",
          "Tom Kha soup in a bowl",
          "Curry with shrimps in a bowl",
          "Shrimps in tempura in a bowl",
          "Chicken satay in a bowl",
          "Bowl with shrimps",
          "Phad thai with shrimps",
          "Fried noodles with tofu",
          "Fried noodles with shrimps",
          "Chicken cashew in a bowl on a table",
        ],
        caption: [
          "Tom Yum - pikantna, azjatycka zupa",
          "Tom Kha - azjatycka zupa z mleczkiem kokosowym",
          "Curry z krewetkami",
          "Krewetki w tempurze",
          "Chicken Satay - szaszłyki z kurczaka",
          "Bowl z krewetkami",
          "Phad Thai z krewetkami - smażony makaron ryżowy",
          "Smażony makaron z tofu",
          "Smażony makaron z krewetkami",
          "Chicken Cashew - kurczak z nerkowcami",
        ],
      },
      currentSlide: 0,
      slideShow: null,
      play: false,
    };
  },
  methods: {
    nextImg() {
      if (this.currentSlide < this.slides.src.length - 1) {
        this.currentSlide++;
      } else {
        this.currentSlide = 0;
      }
    },
    prevImg() {
      if (this.currentSlide > 0) {
        this.currentSlide--;
      } else {
        this.currentSlide = this.slides.src.length - 1;
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
};
</script>

<style scoped>
#gallery {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 2.5vh;
  padding-bottom: 5vh;
  height: 85vh;
}
.gallery-header {
  font-size: 0.8rem;
  width: 100%;
  padding: 0.8rem 0.8rem;
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
  padding-bottom: 0.4rem;
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
  transition: 1.2s;
}
.slides figure:first-child {
  position: relative;
}

.slides figcaption {
  position: absolute;
  bottom: 0.75em;
  right: 0.35em;
  padding: 0.25em;
  font-size: 1rem;
  /* -webkit-text-stroke: 1px var(--color-header); */
  color: var(--color-text);
  background: rgba(255, 255, 255, 0.541);
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
  -webkit-text-stroke: 1.9px var(--color-header);
  color: #dd151550;
  transition: color 0.3s ease-out;
}
.arrow-prev:hover,
.arrow-prev:active,
.arrow-next:hover,
.arrow-next:active {
  color: var(--color-border);
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
  width: 15px;
  height: 20px;
  line-height: 1rem;
  font-size: 1.5rem;
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
  font-size: 1rem;
  line-height: 1rem;
  color: transparent;
  -webkit-text-stroke: 1.9px var(--color-header);
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
  content: "\23F9";
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
}
</style>
