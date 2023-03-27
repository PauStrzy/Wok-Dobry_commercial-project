<template>
  <section id="menu">
    <h2 class="menu-lettering">menu</h2>
    <ul>
      <li>
        <div class="dish first-dish">
          <h4 class="dish-title">Pad Thai</h4>
          <div class="dish-container">
            <img class="dish-img" src="#" alt="dish in a bowl" />
            <ul>
              <li class="dish-ingredients">Makaron ryżowy</li>
              <li class="dish-ingredients">Kiełki bambusa</li>
              <li class="dish-ingredients">Jajko</li>
              <li class="dish-ingredients">Tamarynd</li>
              <li class="dish-ingredients">Limonka</li>
            </ul>
          </div>
          <p class="dish-description first-dish">
            czyli smażony makaron z WOKa. Znajdziecie wiele rodzajów pad thaia,
            ale najczęściej o jego smaku decydują: sos rybny, sos ostrygowy, sos
            tamaryndowy, sos sriracha oraz cukier palmowy.
          </p>
        </div>
      </li>
      <li>
        <div class="dish second-dish">
          <h4 class="dish-title">Curry</h4>
          <div class="dish-container">
            <ul>
              <li class="dish-ingredients">Mleczko kokosowe</li>
              <li class="dish-ingredients">Pasta curry</li>
              <li class="dish-ingredients">Kurkuma</li>
              <li class="dish-ingredients">Ryż</li>
              <li class="dish-ingredients">Liście Limonki</li>
            </ul>
            <img class="dish-img" src="#" alt="dish in a bowl" />
          </div>
          <p class="dish-description second-dish">
            to kombinacja pasty curry oraz mleczka kokosowego, która świetnie
            współgra z podsmażonymi warzywami oraz dodatkami jak kurczak,
            krewetki czy tofu w wersji wegańskiej. Tajskie curry różni się od
            curry w Indiach głównie pod względem konsystencji oraz składników,
            takich jak zioła i aromatyczne liście w połączeniu z mieszanką
            przypraw.
          </p>
        </div>
      </li>
    </ul>
    <button class="btn-to-menu">
      <RouterLink to="/menu"><h3>Sprawdź całe menu</h3></RouterLink>
    </button>
  </section>
</template>

<style scoped>
#menu {
  font-size: 1rem;
  background-color: var(--white-pale);
  box-shadow: 0 0 5px var(--color-border);
  border-radius: 5px;
  padding: 0 2vw 5vh 2vw;
}

.menu-lettering {
  text-transform: uppercase;
  font-size: 4rem;
  text-align: left;
  margin: 0 0 0 2vh;
}
h4.dish-title {
  width: 100%;
  border-bottom: 1px solid var(--color-text);
  font-weight: bold;
  padding: 0 5vw;
}
.dish-container {
  display: flex;
  justify-content: space-between;
  padding: 0 5vw;
}

.dish-ingredients {
  font-style: italic;
}
.dish-img {
  width: 30vw;
  height: auto;
  border-radius: 5px;
}
.dish {
  padding-bottom: 5vh;
}
.first-dish {
  text-align: right;
}
.second-dish {
  text-align: left;
}
.dish-description {
  display: inline-block;
  text-align: justify;
  text-justify: auto;
  font-size: 0.8rem;
  padding: 1vh 5vw 0 5vw;
}
.btn-to-menu a h3 {
  color: var(--white-pale);
  transition: all 0.3s ease;
}
.btn-to-menu:hover a h3 {
  color: var(--color-header);
}

@media (min-width: 992px) {
  #menu {
    font-size: 1.2rem;
    padding-bottom: 5vh;
  }
  .menu-lettering {
    font-size: 6rem;
    margin: 0 0 0 3vh;
  }
  h4.dish-title {
    border-bottom: 2px solid var(--color-text);
    font-size: 2rem;
  }

  .dish-description {
    font-size: 1.2rem;
    padding: 2vh 5vw 0 5vw;
  }
}
@media (min-width: 1800px) {
  #menu {
    font-size: 1.2rem;
    padding-bottom: 10vh;
    font-weight: bold;
  }

  .dish {
    padding-bottom: 10vh;
  }
  .menu-lettering {
    font-size: 10rem;
  }
  h4.dish-title {
    font-size: 3rem;
  }
  .btn-to-menu a h3 {
    color: var(--white-pale);
    transition: all 0.3s ease;
    font-size: 1.5rem;
  }
}
</style>
