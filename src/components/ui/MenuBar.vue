<template>
  <div class="menu-wrapper" @click="$emit('toggleMenu')">
    <div class="bars">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<style scoped>
.menu-wrapper {
  position: fixed;
  bottom: 5vh;
  right: calc(50vw - 40px);
  z-index: 1000;
  cursor: pointer;
}
.bars {
  width: 80px;
  height: 80px;
  border-radius: 8px;
  text-align: center;
}
.bars span,
.bars:before,
.bars:after {
  content: "";
  position: absolute;
  top: calc(50% - 1px);
  left: 20%;
  width: 60%;
  /* border: 2px solid rgba(87, 4, 4, 0.575); */
  border: 2px solid var(--color-text);
  border-radius: 8px;
  transition: transform 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);
}
.bars:before {
  transform: translateY(-8px);
}
.bars:after {
  transform: translateY(8px);
}

@media (min-width: 1400px) {
  .menu-wrapper {
    display: none;
  }
}
</style>
