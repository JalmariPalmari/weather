<template>
  <div class="home">
    <weatherWidget />
    <yhteystiedot />
  </div>
</template>




<script>
import weatherWidget from '@/components/weatherWidget.vue'; // Tuodaan komponentit

export default {
  name: "home",
  components: { // Rekisteröidään komponentit
    weatherWidget
  }

}
</script>







<style lang="scss" scoped> // Tyylit 🖍️
  .home {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
</style>