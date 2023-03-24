<template>
  <swiper
    :spaceBetween="30"
    :effect="'fade'"
    :navigation="true"
    :autoplay="{ delay: 3500, disableOnInteraction: false }"
    :pagination="{
      clickable: true,
    }"
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
import "swiper/css/navigation";
import "swiper/css/pagination";

import { EffectFade, Navigation, Pagination } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [EffectFade, Navigation, Pagination],
    };
  },
};
</script>

<style scoped>
.swiper {
  width: 100%;
  height: 100%;
  --swiper-navigation-size: 20px;
  --swiper-navigation-color: var(--swiper);
  --swiper-pagination-color: var(--swiper);
  --swiper-pagination-zindex: 222222;
  border-radius: 5px;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
}

@media (min-width: 1000px) {
  .swiper {
    --swiper-navigation-size: 33px;
  }
}
@media (min-width: 1800px) {
  .swiper {
    --swiper-navigation-size: 44px;
  }
}
</style>
