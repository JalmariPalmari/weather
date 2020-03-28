<template>
  <div class="kalastuskirja">
  <Kalastuskirja />
  </div>
</template>


<script>
 import Kalastuskirja from '@/components/Kalastuskirja.vue';// Tuodaan komponentit


export default {
  name: "kalastuskirja",
  components: { // Rekisteröidään komponentit
    Kalastuskirja,
  }
}
</script>







<style lang="scss" scoped> // Tyylit 🖍️
  .hei {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
</style>