<template>
  <swiper
    :spaceBetween="30"
    :effect="'fade'"
    :autoplay="{ delay: 3500, disableOnInteraction: false }"
    :modules="modules"
    :loop="true"
  >
    <swiper-slide
      ><img src="../../img/IMG_0428.jpg" alt="Shrimps and brocoli in poke bowl"
    /></swiper-slide>

    <swiper-slide
      ><img src="../../img/IMG_0290.jpg" alt="Shirmps in green rice tempura"
    /></swiper-slide>
    <swiper-slide
      ><img src="../../img/wok_on_flames.jpg" alt="Wok on flames"
    /></swiper-slide>
    <swiper-slide
      ><img src="../../img/IMG_0385.jpg" alt="Tonkatsu dish"
    /></swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";

import "swiper/css/effect-fade";

import { EffectFade } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [EffectFade],
    };
  },
};
</script>

<style scoped>
.swiper {
  width: 100%;
  height: 100%;
  border-radius: 5px;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
}
</style>
