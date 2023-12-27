import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import CV from "../views/CV.vue";
import Contact from "../views/Contact.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/cv",
    name: "CV",
    component: CV,
  },
  {
    path: "/contact",
    name: "Kontakt",
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
