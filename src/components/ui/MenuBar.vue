<template>
  <div class="menu-wrapper" @click="$emit('toggleMenu')">
    <div class="bars" v-if="!vis">
      <span></span>
    </div>
    <div class="xSign" v-else>
      <span></span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["vis"],
};
</script>

<style scoped>
.menu-wrapper {
  position: fixed;
  width: 45px;
  height: 30px;
  /* bottom: 5vh;
  left: calc(50vw - 60px / 2); */
  top: 15px;
  right: 15px;
  z-index: 1000;
  cursor: pointer;
}
.bars {
  /* width: 60px; */
  width: 45px;
  height: 30px;
  border-radius: 8px;
}
.bars span,
.bars:before,
.bars:after {
  content: "";
  position: absolute;
  top: 14px;
  width: 100%;
  border: 2px solid var(--color-border);
  border-bottom-left-radius: 30%;
  border-top-left-radius: 30%;
  border-right: 10px solid var(--swiper);
}
.bars span {
  border: none;
}

.bars:before {
  transform: translateY(-4px);
}
.bars:after {
  transform: translateY(4px);
}

.xSign {
  /* width: 60px; */
  width: 45px;
  height: 30px;
  border-radius: 8px;
  transition: transform 0.9s;
}
.xSign span,
.xSign:before,
.xSign::after {
  content: "";
  position: absolute;
  top: 14px;
  width: 100%;
  border: 2px solid var(--color-border);
  border-bottom-left-radius: 30%;
  border-top-left-radius: 30%;
  transform-origin: 70%;
  border-right: 10px solid var(--swiper);
}
.xSign span {
  border: none;
}
.xSign:before {
  transform: rotate(15deg) translateY(-4px);
}
.xSign:after {
  transform: rotate(-15deg) translateY(4px);
}

@media (min-width: 1240px) {
  .menu-wrapper {
    display: none;
  }
}
</style>
