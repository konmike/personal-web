import { createApp } from "vue";
import App from "./App.vue";
import mitt from "mitt";
import router from "./router";

const emitter = mitt();
const app = createApp(App);
app.config.globalProperties.emitter = emitter;

import "@fortawesome/fontawesome-free/css/all.min.css";
import "aos/dist/aos.css";

app.use(router).mount("#app");
