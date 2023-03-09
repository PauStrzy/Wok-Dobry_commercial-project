import "./assets/main.css";
import { createApp } from "vue";
import { createPinia } from "pinia";
import { register } from "swiper/element/bundle";
register();

import App from "./App.vue";
import router from "./router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faChevronUp);

import BaseSpinner from "./components/ui/BaseSpinner.vue";
import BaseBreak from "./components/ui/BaseBreak.vue";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.component("base-spinner", BaseSpinner);
app.component("base-break", BaseBreak);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
