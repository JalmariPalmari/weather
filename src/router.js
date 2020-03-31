import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue"; // tuo komponentit, jotka halutaan reiteiksi
import Saakirja from "./views/Saakirja.vue";

Vue.use(Router); // kerrotaan Vuelle, että käytetään reitityksiä

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [ // Kaikki reitit on kuvattu tässä
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/saakirja",
      name: "saakirja",
      component: Saakirja
    }
  ]
});
