import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import BaseSpinner from "./components/ui/BaseSpinner.vue";

import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.component("base-spinner", BaseSpinner);

app.mount("#app");
