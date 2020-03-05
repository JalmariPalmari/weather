import axios from "axios";
import { CURRENT_WEATHER } from "@/constants"; // URL osoite, jonka mukana kyselyt ja API avain

const apiClient = axios.create({ // Luodaan lupaus, joka hakee HTTP pyynnöllä Weatherbit palvelusta säätiedot
  baseURL: CURRENT_WEATHER,
  withCredentials: false, // CORS
  headers: { // HTTP otsikot
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default {
  getWeather() { // funktio, jota käytetään store.js tiedostossa 
    return apiClient.get();
  }
};
