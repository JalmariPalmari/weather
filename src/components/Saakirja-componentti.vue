
<template>
  <div id="weather">
    <h3>{{ toivotus() }}</h3>
      <div>
        <main>
<div class="searchbox">
<input type="text" class="searchbar" placeholder="Etsi sää kaupungin mukaan" v-model="query" @keyup.enter="getWeather" />
</div>

  <!--Jos tietoja ei vielä ole haettu/määritetty, niitä ei näytetä-->
<div class="weather-wrap" v-if="typeof weatherData.main != 'undefined'"> 
  <div class="location-box">
    <div class="location"> {{ weatherData.name }}, {{ weatherData.sys.country }} </div>
  </div>
    <div class="weather-box">
    <div class="temp"> {{Math.round(weatherData.main.temp)}} c</div>
    <div class="weather"> Rain</div>
  </div>
</div>
</main>
</div>

    </div>
    
</template>

<script>

export default {    
 data() {
    return {
      api_key: '34caeeab8d5c6b4c451b87c0752f828c',
      url_base: 'https://api.openweathermap.org/data/2.5/',
      query: '',
      weatherData: {}
    }
  },

  methods: {
    toivotus: function() {
      return 'Tervetuloa sääkirjalle'
    },
     getWeather () { 
       {
          fetch(`${this.url_base}weather?q=${this.query}&units=metric&appid=${this.api_key}`)
          .then(res => {
            return res.json();
          }).then(this.setResults); 
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


#weather {
  background-image: url('./tausta.jpg');
  background-size: cover;
  background-position: bottom;
  transition: 0.5s;

}
h3 {
  padding: 40px;
  margin: 40px 0 0;
  color: #222;
  font-size: 40;
}
h1 {
  background: lightgreen;
  padding: 20px;
  text-align: center;
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
  color:paleturquoise;

}
.location-box .location {
  color: rgb(230, 255, 255);
  font-size: 50px;
  font-weight: 500;
  text-align: center;
  text-shadow: 1px 1px;
  padding: 100px;
}
.location-box .date {

  text-align: center;
  text-shadow: 1px 1px;
}
.weather-box {
  text-align: center;
}
.weather-box .temp {
  display: inline-block;
  text-shadow: 3px 6px rgba(0,0,0,0.25);
  font-weight: 500;
  font-size: 200px;
  padding: 20px 40px;
  text-align: center;
  text-shadow: 1px 1px;
  box-shadow: 4px 6px rgba(255,255,255,0.25);
}
.weather-box .weather {
  text-align: center;
  text-shadow: 1px 1px;
}
</style>
