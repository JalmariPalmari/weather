import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue"; // tuo komponentit, jotka halutaan reiteiksi

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
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
