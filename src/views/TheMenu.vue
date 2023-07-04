<template>
  <section class="menu">
    <div class="menu">
      <h4 class="menu">
        <a href="pdf/Menu.pdf" target="_blank" rel="noopener noreferrer">
          Pobierz Menu</a
        >
      </h4>
    </div>
  </section>
</template>

<style scoped>
div.menu {
  margin: 0 auto;
}
h4.menu {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 2rem;
  padding: 2rem 0;
  text-transform: uppercase;
}
a {
  color: rgba(200, 200, 200, 0.5);
}
a:hover {
  color: rgba(200, 200, 200, 1);
}

@media (min-width: 760px) {
  h4.menu {
    flex-direction: row;
    font-size: 2rem;
  }
}
</style>
