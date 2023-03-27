<template>
  <swiper
    :spaceBetween="30"
    :effect="'fade'"
    :autoplay="{ delay: 3500, disableOnInteraction: false }"
    :modules="modules"
    :loop="true"
  >
    <swiper-slide
      ><img src="../../img/chickenht.jpg" alt="Chicken satay in a bowl"
    /></swiper-slide>
    <swiper-slide
      ><img src="../../img/shrimpscurryht.jpg" alt="Prawn curry in a bowl"
    /></swiper-slide>
    <swiper-slide
      ><img
        src="../../img/shrimpsht.jpg"
        alt="Tempura breaded shrimps in a bowl"
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
