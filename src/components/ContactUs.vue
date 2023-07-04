<template>
  <section class="container">
    <div class="map">
      <h3 class="map-title title">Tu jesteśmy!</h3>
      <div class="map-object">
        <GoogleMap
          api-key="AIzaSyCoUQk6TqN3Y7ZCif0VT6He0rHcf6Gr1Dk"
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
      <div class="contact-details">
        <h3 class="contact-details-title title">Dane kontaktowe</h3>
        <ul class="contact-details-list">
          <li>
            <a href="tel:663252923"
              ><i class="fa-regular fa-comment icon"></i> 663 252 923</a
            >
          </li>
          <li>
            <a href="mailto:wokdobry@gmail.com"
              ><i class="fa-solid fa-envelope icon"></i> wokdobry@gmail.com</a
            >
          </li>
        </ul>
      </div>
      <div class="address">
        <h3 class="address-title title">Adres</h3>
        <ul class="address-list">
          <li>ul. Braterstwa Narodów 53</li>
          <li>82-500 Kwidzyn</li>
        </ul>
      </div>
      <div class="hours">
        <h3 class="hours-title title">Godziny otwarcia:</h3>
        <ul class="hours-list">
          <li>pon. - pt. 12:00 - 20:00</li>
          <li>nd. - sb. 13:00 - 20:00</li>
        </ul>
      </div>
      <div class="social">
        <h3 class="social-title title">Social Media</h3>
        <a
          href="https://www.facebook.com/profile.php?id=100066918998934"
          class="social-link"
          target="_blank"
          rel="noopener noreferrer"
          ><i class="fab fa-facebook-square icon"></i> Facebook</a
        >
        <a
          href="https://instagram.com/wokdobry?igshid=YmMyMTA2M2Y="
          target="_blank"
          rel="noopener noreferrer"
          class="social-link"
          ><i class="fab fa-instagram icon"></i>Instagram</a
        >
      </div>
    </div>
  </section>
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
  width: 100%;
  height: 100%;
  margin: 1rem auto;
  box-shadow: 0 0 5px var(--color-border);
  background-color: var(--white-pale);
  border-radius: 5px;
}

.map-object {
  margin: 0rem auto 1rem;
  width: 95%;
  height: 80vh;
}
.information-box {
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
  margin: 2rem 0;
  padding: 2rem 0;
  width: 100%;
  min-height: 50vh;
  background-color: var(--white-pale);
  box-shadow: 0 0 5px var(--color-border);
  border-radius: 5px;
}
.address,
.social,
.hours,
.contact-details {
  text-align: center;
  margin: 1rem 0;
}

.title {
  margin: 0.5rem 0;
  text-transform: uppercase;
  font-weight: bold;
}
.address-list,
.hours-list,
.contact-details-list {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.contact-details a {
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
}
.social-link {
  font-weight: bold;
  padding: 0 1rem;
  font-size: 1rem;
}
.icon {
  font-size: 1rem;
  padding: 0.5rem 0.3rem 0.5rem 0;
  font-weight: bold;
}
.contentInfo p {
  font-weight: bold;
}

@media (min-width: 992px) {
  .information-box {
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    min-height: 25vh;
    flex-wrap: wrap;
  }

  .social {
    flex-basis: 100%;
  }
  .address {
    flex-basis: 30%;
  }
  .contact-details {
    flex-basis: 30%;
  }
  .hours {
    flex-basis: 30%;
  }
  .title {
    font-size: 1.3rem;
  }
  .social-link {
    font-size: 1.2rem;
  }
  .social-link .icon {
    font-size: 1.2rem;
  }
}
@media (min-width: 1240px) {
  .container {
    padding-bottom: 5vh;
  }
  .map-title {
    font-size: 2rem;
    letter-spacing: 0.1rem;
    word-spacing: 0.2rem;
    padding: 1vh 0;
  }
}
</style>
