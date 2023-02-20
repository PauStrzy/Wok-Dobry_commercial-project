import { createApp } from "vue";
import { createPinia } from "pinia";
// import { Bootstrap } from "bootstrap";
import { register } from "swiper/element/bundle";
register();

import App from "./App.vue";
import router from "./router";

// import "bootstrap/dist/css/bootstrap.css";

import BaseSpinner from "./components/ui/BaseSpinner.vue";
import BaseBreak from "./components/ui/BaseBreak.vue";

import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);

// app.use(Bootstrap);

app.component("base-spinner", BaseSpinner);
app.component("base-break", BaseBreak);

app.mount("#app");
