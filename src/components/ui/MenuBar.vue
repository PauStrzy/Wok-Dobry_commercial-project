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
  bottom: 5vh;
  left: calc(50vw - 60px / 2);
  z-index: 1000;
  cursor: pointer;
}
.bars {
  width: 60px;
  height: 2px;
  border-radius: 8px;
  transform: scaleY(1);
  transition: transform 0.9s;
}
.bars span,
.bars:before,
.bars:after {
  content: "";
  position: absolute;
  width: 100%;
  border: 2px solid var(--color-text);
  border-radius: 8px;
  border-right: 10px solid #1849cf;
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
  width: 60px;
  height: 2px;
  border-radius: 8px;
  transition: transform 0.9s;
}
.xSign span,
.xSign:before,
.xSign::after {
  content: "";
  position: absolute;
  width: 100%;
  border: 2px solid var(--color-text);
  border-radius: 8px;
  transform-origin: 70%;
  border-right: 10px solid #1849cf;
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
