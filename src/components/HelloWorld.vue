<template>
  <div class="brand-name">
    <RouterLink to="/"><h1>WOK dobry!</h1></RouterLink>
  </div>
</template>

<style scoped>
.brand-name h1 {
  /* background-color: var(--white-pale);
  box-shadow: 0 0 5px var(--color-border); */
  font-weight: 400;
  border-radius: 5px;
  font-size: 2.3rem;
  text-transform: uppercase;
  text-align: center;
  animation: flicker 6s infinite alternate;
  color: transparent;
  -webkit-text-stroke: 2px #f81313d5;
  -webkit-text-fill-color: #f16666a9;
}
@keyframes flicker {
  0%,
  18%,
  21%,
  26%,
  30%,
  53%,
  56%,
  100% {
    text-shadow: 0 0 4px #fae1e1, 0 0 11px #fcdede, 0 0 19px #f88484,
      0 0 30px #f33737, 0 0 50px #f82a2a, 0 0 70px #f52b2b;
    -webkit-text-stroke: 2px var(--color-border);
    -webkit-text-fill-color: #f16666a9;
  }
  23%,
  25%,
  27% {
    -webkit-text-stroke: 2px var(--color-border);
    -webkit-text-fill-color: #e44141d5;
    text-shadow: none;
  }
}

@media (min-width: 1240px) {
  .brand-name h1 {
    background-color: transparent;
    box-shadow: none;
    text-align: left;
    font-size: 3.5rem;
  }
}
@media (min-width: 1800px) {
  .brand-name h1 {
    letter-spacing: 0.1rem;
    text-align: left;
    font-size: 4rem;
  }
}
</style>
