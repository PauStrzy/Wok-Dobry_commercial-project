<template>
  <Transition name="newsletter">
    <div class="newsletter-mask" v-show="show">
      <form class="newsletter-form" @submit.prevent>
        <button class="newsletter-btn-close" @click="close">X</button>
        <h2>Dołącz do naszego newslettera</h2>
        <p class="slogan">
          Badź na bieżąco i otrzymaj 10% rabat na pierwsze zamówienie w lokalu!
        </p>
        <div
          class="newsletter-control"
          :class="{ invalid: userNameValidity === 'invalid' }"
        >
          <input
            type="text"
            id="user-name"
            name="user-name"
            v-model.trim="userName"
            placeholder="Twoje imię"
          />
          <p class="invalid-slogan">Podaj imię</p>
        </div>
        <div
          class="newsletter-control"
          :class="{ invalid: userEmailValidity === 'invalid' }"
        >
          <input
            type="email"
            id="user-email"
            v-model="userEmail"
            placeholder="Adres e-mail"
          />
          <p class="invalid-slogan">Podaj prawidłowy adres e-mail</p>
        </div>
        <div class="newsletter-control">
          <label for="confirm-terms">
            <p class="confirm-terms-caption">
              Zapisując się do newslettera zgadzasz się na otrzymywanie od nas
              informacji handlowych drogą elektroniczną. Zgoda jest dobrowolna,
              możesz ją wycofać w każdym momencie bez podawania przyczyny.
              Administratorem danych osobowych jest Wok Dobry. Więcej
              informacji, w tym o zasadach przetwarzania danych osobowych,
              znajdziesz w
              <a class="terms-link" href="#" @click="close"
                >Regulaminie Newslettera</a
              >.
            </p>
          </label>
        </div>
        <button @click="submitForm" class="newsletter-btn-sign-up">
          Zapisz mnie!
        </button>
      </form>
    </div>
  </Transition>
</template>

<script>
import { Transition } from "vue";

export default {
  props: {
    show: Boolean,
  },
  components: { Transition },
  data() {
    return {
      userName: "",
      userEmail: "",
      userNameValidity: "pending",
      userEmailValidity: "pending",
      userEmailRegex:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      error: null,
    };
  },
  methods: {
    submitForm() {
      const emailPassedRegexCheck = this.userEmail.match(this.userEmailRegex);
      const isUserNameValid = this.userName !== "";

      this.userEmailValidity = emailPassedRegexCheck ? "valid" : "invalid";
      this.userNameValidity = isUserNameValid ? "valid" : "invalid";

      if (emailPassedRegexCheck && isUserNameValid) {
        fetch(import.meta.env.VITE_APP_DATABASE_URL, {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            name: this.userName,
            email: this.userEmail,
          }),
        })
          .then((res) => {
            if (res.ok) {
              console.log("Email saved to newsletter");
              this.newsletterSaved = true;
            } else {
              throw new Error("Could not add to newsletter!");
            }
          })
          .catch((error) => {
            console.log(error);
            this.error = error.message;
            alert(
              "W tej chwili nasz newsletter jest niedostępny, spróbuj później lub skontaktuj się z nami!"
            );
          });
        this.close();
      }
    },

    clearForm() {
      this.userName = "";
      this.userEmail = "";
      this.userNameValidity = "pending";
      this.userEmailValidity = "pending";
      this.error = null;
    },
    close() {
      this.$emit("clicked");
      this.clearForm();
    },
  },
};
</script>

<style scoped>
.newsletter-mask {
  position: fixed;
  z-index: 100000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.3s ease;
}
.newsletter-form {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: var(--color-text);
  width: 60rem;
  min-height: 35rem;
  margin: 2rem auto;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.795);
  padding: 1rem 1rem;
  background-color: var(--color-border-hover);
  max-width: 90%;
}
.newsletter-control {
  margin-bottom: 0.5rem;
}
h2 {
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
}
p.slogan {
  font-size: 1.2rem;
}
label {
  font-weight: bold;
}
input {
  display: block;
  width: 100%;
  font: inherit;
  margin-top: 0.5rem;
  color: var(--color-hover);
  font-weight: bold;
  padding: 0.2rem 1rem;
  border: none;
  background: transparent;
  border-bottom: 2px solid var(--color-border);
}
input::placeholder {
  font-weight: bold;
  opacity: 0.7;
  color: var(--color-hover);
  background: none;
  border: none;
}

input:focus {
  outline: none;
  border-bottom: 2px solid var(--color-hover);
  background: none;
}
input:-webkit-autofill,
textarea:-webkit-autofill,
select:-webkit-autofill {
  transition-delay: 3600s;
}

.confirm-terms-caption {
  font-size: 0.7rem;
  text-align: justify;
}
button {
  font: inherit;
  border: 2px solid var(--color-header);
  color: var(--color-border-hover);
  font-weight: bold;
  border-radius: 8px;
  font-size: 1rem;
  padding: 0.4rem 0.8rem;
  background-color: var(--color-header);
  cursor: pointer;
  transition: all 0.3s ease;
}

.newsletter-control p.invalid-slogan {
  opacity: 0;
}
.invalid p.invalid-slogan {
  opacity: 1;
}

button:hover {
  background-color: var(--color-background-pale);
  color: var(--color-header);
}
.newsletter-btn-close {
  padding: 0.1rem 0.5rem;
  margin: 0;
  align-self: end;
}

.terms-link {
  font-weight: bold;
}

.newsletter-enter-from {
  opacity: 0;
}
.newsletter-leave-to {
  opacity: 0;
}

@media (min-width: 1240px) {
  .newsletter-form {
    margin: 5vh auto;
    padding: 2rem 4rem;
  }
  h2 {
    font-size: 2rem;
  }
  button {
    font-size: 1.3rem;
    padding: 0.75rem 1.5rem;
  }
  .newsletter-btn-close {
    padding: 0.25rem 1rem;
  }
  .confirm-terms-caption {
    font-size: 0.95rem;
  }
}

@media (min-width: 1800px) {
  .newsletter-form {
    margin: 20vh auto;
  }
}
</style>
