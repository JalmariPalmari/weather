import Vue from "vue"; // Vue kirjasto käyttöön
import App from "./App.vue"; // juuri komponentti
import router from "./router"; // reititys asetukset
import store from "./store"; // säilytys asetukset

import "normalize.css"; // Normalize.css normaalityylien palautukseen

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app"); // Tehdään Vue instanssi, joka ajetaan index.html tiedostossa #app elemttti
