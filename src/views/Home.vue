<template>
  <div class="home">
    <weatherWidget />
  </div>
</template>

<script>
import weatherWidget from '@/components/weatherWidget.vue'; // import component

export default {
  name: "home",
  components: { // and register it
    weatherWidget
  }
}
</script>

<style lang="scss" scoped> // some styles 🖍️
  .home {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
</style>