import Vue from "vue"; // Vue kirjasto käyttöön
import App from "./App.vue"; // juuri komponentti
import router from "./router"; // reititysasetukset
import store from "./store"; // säilytysasetukset


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app"); // Tehdään Vue instanssi, joka ajetaan index.html tiedostossa #app elemttti
