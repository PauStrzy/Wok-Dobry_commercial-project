<template>
  <div class="container">
    <div class="map">
      <h3 class="map-title">Tu jesteśmy!</h3>
      <div class="map-object">
        <GoogleMap
          api-key="AIzaSyCOZoC1vUQb2E0L5EynB4TPIY7p1KUu2Qo"
          style="width: 100%; height: 100%"
          :center="center"
          :zoom="15"
        >
          <Marker :options="{ position: marker }">
            <InfoWindow
              :options="{ position: marker }"
              :opened="{ open: true }"
            >
              <div class="contentInfo">
                <p>WOK DOBRY</p>
              </div>
            </InfoWindow>
          </Marker>
        </GoogleMap>
      </div>
    </div>
    <div class="information-box">
      <div class="address">
        <h3 class="address-title">Adres:</h3>
        <ul class="address-list">
          <li>ul. Braterstwa Narodów 53</li>
          <li>82-500 Kwidzyn</li>

          <li>
            <a href="tel:+48792612888"
              ><i class="fa-regular fa-comment icon"></i> 792 612 888</a
            >
          </li>
          <li>
            <a href="mailto:strzyyy@gmail.com"
              ><i class="fa-solid fa-envelope icon"></i> wokdobry@gmail.com</a
            >
          </li>
        </ul>
      </div>
      <div class="social">
        <h3 class="social-title">Sprawdź nas tutaj:</h3>
        <a href="#" class="social-link"
          ><i class="fab fa-facebook-square icon"></i> Facebook</a
        >
        <a href="#" class="social-link"
          ><i class="fab fa-instagram icon"></i>Instagram</a
        >
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import { GoogleMap, Marker, InfoWindow } from "vue3-google-map";

export default defineComponent({
  components: { GoogleMap, Marker, InfoWindow },
  setup() {
    const center = { lat: 53.73636294072948, lng: 18.926333641685527 };
    const marker = { lat: 53.73636294072948, lng: 18.926333641685527 };
    return { center, marker };
  },
});
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.map {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 90%;
  height: 100%;
  margin: 1rem 0;
  box-shadow: 0 0 5px var(--color-border);
  background-color: var(--white-pale);
  border-radius: 5px;
}

.map-object {
  margin: 0rem auto 1rem;
  width: 95%;
  height: 50vh;
}
.information-box {
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
  margin: 2rem 0;
  padding: 1rem 0;
  width: 90%;
  min-height: 50vh;
  background-color: var(--white-pale);
  box-shadow: 0 0 5px var(--color-border);
  border-radius: 5px;
}
.address,
.social {
  text-align: center;
  margin: 1rem 0;
}
.address-title,
.social-title,
.map-title {
  margin: 1.5rem 0;
  text-transform: uppercase;
  font-weight: bold;
}
.address-list {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.address-list li:nth-of-type(3) {
  margin-top: 1rem;
}

.social-link,
.address-list a {
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
}
.icon {
  font-size: 1.3rem;
  padding: 0.5rem;
  font-weight: bold;
}
.contentInfo p {
  font-weight: bold;
}

@media (min-width: 992px) {
  .information-box {
    flex-direction: row;
    min-height: 30vh;
  }
  .address-title,
  .social-title,
  .map-title {
    font-size: 1.5rem;
  }
}
/* @media (min-width: 1240px) {
  .container {
    padding-bottom: 5vh;
  }
} */
</style>
