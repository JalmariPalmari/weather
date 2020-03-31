<template>
  <div>
    <div v-if="this.$store.state.dataIsRecived" class="weather-widget"> // widget itself
      <p class="weather-widget_city">{{ weather.city_name }}</p>
      <h2 class="weather-widget_temp">{{ weather.temp }}<span>°C</span></h2>
      <p class="weather-widget_status">Sään kuvaus:  {{ weather.weather.description }}</p>
      <div class="sunrise">Auringonnousu: {{ weather.sunrise }} </div>
       <div class="sunset">Auringonlasku: {{ weather.sunset }} </div>
    </div>
    <div v-else class="weather-widget"> // preloader
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      weather() {
        return this.$store.state.weather // gets weather state from Vuex store
      }
    },
    created() {
      this.$store.dispatch("updateWeather"); // dispatch "updateWeather" when component is created
    }
  }
</script>

<style lang="scss" scoped> // Sään tyylit 🖍️
  .weather-widget {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #429EA6;
  }

  .weather-widget_city {
    font-size: 20px;
    margin: 0;
  }
  .sunrise {
    border-style:dotted;
    border-color: yellow;
    font-size: 20px;
    margin: 10px;
    padding: 10px;
  }
    .sunset {
    border-style:dotted;
    border-color: orange;
    font-size: 20px;
    margin: 10px;
    padding: 10px;
  }

  .weather-widget_temp {
    display: flex;
    align-items: flex-start;
    color: #16F4D0;
    font-size: 200px;
    font-weight: 200;
    margin: 0;

    span {
      font-size: 30px;
      font-weight: 400;
      margin-top: 35px;
    }
  }

  .weather-widget_status {
    border-style:double;
    border-color: lawngreen;
    font-size: 20px;
    margin: 10px;
    padding: 10px;
  }
</style>