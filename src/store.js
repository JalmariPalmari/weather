import Vue from "vue";
import Vuex from "vuex";

import service from "@/services/service.js"; // service.js hakee datan APIsta.
Vue.use(Vuex); // tell Vue to action with Vuex

export default new Vuex.Store({
  state: { // määritellään mitä dataa halutaan säilöä
    weather: {},
    dataIsRecived: false
  },
  mutations: { // muutetaan statea tässä
    UPDATE_WEATHER(state) {
      service
        .getWeather() // kutsuu funktiota service.ja tiedostosta, joka palauttaa datan APIsta.
        .then(response => { // Jos vastaus saadaan
          state.weather = response.data.data[0]; // asetetaan weather objektille data
          state.dataIsRecived = true; // merkitään, että data on saatu
          console.log(response); // viedään vastaus consoliin
        })
        .catch(error => { // Jos tapahtuu virhe
          console.log("There was an error:", error.response); // viedään virheviesti consoliin
          state.dataIsRecived = false; // Merkitään, että dataa ei saatu
        });
    }
  },
  actions: { // kutsutaan mutaatioita jotka muuttavat sään tilaa
    updateWeather(context) {
      context.commit("UPDATE_WEATHER");
    }
  }
});

