<template>
  <swiper
    :spaceBetween="30"
    :effect="'fade'"
    :navigation="true"
    :pagination="{
      clickable: true,
    }"
    :modules="modules"
    :loop="true"
  >
    <swiper-slide
      ><img src="../../../img/inside_1.png" alt="Inside of Wok Dobry"
    /></swiper-slide>
    <swiper-slide
      ><img src="../../../img/inside_2.png" alt="Inside of Wok Dobry"
    /></swiper-slide>
    <swiper-slide
      ><img src="../../../img/inside_3.png" alt="Inside of Wok Dobry"
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
