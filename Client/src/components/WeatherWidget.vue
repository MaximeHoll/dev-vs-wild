<template>
  <div class="widget-meteo">
    <vue-weather-widget :weather-data="weatherData" />
  </div>
</template>

<script setup>
import { ref, watchEffect } from "vue";
import axios from "axios";
import VueGeolocationApi from "vue-geolocation-api";
// import VueWeatherWidget from "vue-weather-widget";


    const weatherData = ref(null);

    const getWeatherData = async () => {
      const geo = VueGeolocationApi();


        const coords = await geo.getCurrentPosition();
        const apiKey = "4f48351b45537cc39c02a52c33f81894";
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&appid=${apiKey}&units=metric`;

        const response = await axios.get(apiUrl);
        weatherData.value = response.data;
  
    };

    watchEffect(() => {
      getWeatherData();
    });

    

</script>
