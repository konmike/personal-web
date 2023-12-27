import { createApp } from "vue";
import App from "./App.vue";
import mitt from "mitt";
import router from "./router";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "aos/dist/aos.css";

const emitter = mitt();
const app = createApp(App);
app.config.globalProperties.emitter = emitter;

app.use(router);
app.mount('#app');
