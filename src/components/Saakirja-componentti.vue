<template>
<!-- jos lämpötila alle 0 näytetään kylmän sään taustakuva, jos lämmin näytetään sama taustakuva -->
  <div id="weather" :class="typeof weatherData.main != 'undefined' && weatherData.main.temp < 0 ? 'cold' : '' " > 
    <h3>{{ otsikko() }}</h3>
        <main>
<div class="searchbox">
<input type="text" class="searchbar" placeholder="Etsi sää kaupungin mukaan" v-model="query" @keyup.enter="getWeather" @click="toggleClass()">
</div>

  <!--Jos tietoja ei vielä ole haettu/määritetty, niitä ei näytetä-->
<div class="weather-wrap" v-if="typeof weatherData.main != 'undefined'"> 
  <div class="location-box">
    <div class="location"> {{ weatherData.name }}, {{ weatherData.sys.country }} </div>
  </div>
    <div class="weather-box">
    <div class="temp"> {{Math.round(weatherData.main.temp)}} <span>°C</span></div>
    <div class="weatherdescription"> {{ weatherData.weather[0].description }}</div>
  </div>
</div>
</main>
</div>
</template>

<script>
export default {    
 data() {
    return {
      api_key: '34caeeab8d5c6b4c451b87c0752f828c',
      url_base: 'https://api.openweathermap.org/data/2.5/',
      query: '',
      weatherData: {},
      taustakuva: false
    }
  },

  methods: {
    otsikko: function() {
      return 'Tervetuloa sääkirjalle'
    },
     getWeather: function () { 
       {
         fetch(`${this.url_base}weather?q=${this.query}&units=metric&appid=${this.api_key}&lang=fi`)
          .then(res => {
            return res.json();
          }).then(this.setResults)
          .catch (function (error) {
          console.log(error);
          throw error;
          });
          
        }
      },
      setResults(results) {
         this.weatherData = results;
      }
  },

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  margin: 0;
  padding: 0 ; 
  box-sizing: border-box;
}
span {
  font-size: 30px;
  margin-top: 35px;
}
#weather {
  background-image: url('../assets/tausta.jpg');
  background-size: cover;
  background-position: bottom;
  transition: 0.5s;
}
#weather.warm{
  background-image: url('../assets/warm.jpg');
}
#weather.cold{
  background-image: url('../assets/cold.jpg');
}

h3 {
  padding: 40px;
  margin: 40px 0 0;
  color: #222;
  font-size: 40;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
main {
  min-height: 100vh;
  padding: 25px;
  background-image: linear-gradient(to bottom, rgba(0,0,0,0.25),rgba(0,0,0,0.50))
}
.searchbox {
  width: 100%;
  margin-bottom: 30px;
}
.searchbox .searchbar {
  display: block;
  width: 100%;
  padding: 15px;
  color:rgb(255, 255, 255);
  font-size: 15px;
  outline: none;
  background: none;
  border-radius: 0px 20px 0px 20px;
  background-color: rgba(255,255,255,0.5);
  transition: 1s;
  box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.25);
}
.searchbox .searchbar:focus {
  background-color: rgb(196, 196, 196);
  box-shadow: 0px 0px 50px rgba(255, 255, 255);
  border-radius: 20px;
}
.location-box .location {
  color: rgb(230, 255, 255);
  font-size: 50px;
  font-weight: 500;
  text-align: center;
  text-shadow: 3px 1px rgba(0,0,0,0.25);
  padding: 100px;
}
.weather-box {
  text-align: center;
}
.weather-box .temp {
  display: inline-block;
  padding: 20px 40px;
  text-shadow: 1px 2px rgb(255, 255, 255);
  font-weight: 500;
  font-size: 200px;
  
  text-align: center;
  border-radius: 30px;
  background-color: rgba(255, 255, 255, 0.25);
  border:rgb(230, 255, 255);
  border-style: dotted;
}
.weather-box .weatherdescription {
  color: beige;
  font-size: 50px;
  padding: 40px;
}


</style>
