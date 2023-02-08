<template>
  <div class="menu-wrapper" @click="$emit('toggleMenu')">
    <div class="bars">
      <span></span>
    </div>
  </div>
</template>

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
  /* top: calc(50% - 1px); */
  width: 100%;
  /* border: 2px solid rgba(87, 4, 4, 0.575); */
  border: 2px solid var(--color-text);
  border-radius: 8px;
}

.bars:before {
  transform: translateY(-8px);
}
.bars:after {
  transform: translateY(8px);
}
.bars:active {
  transform: scaleY(1.5);
}
.bars:hover {
  transform: scaleY(1.5);
}

@media (min-width: 1240px) {
  .menu-wrapper {
    display: none;
  }
}
</style>
