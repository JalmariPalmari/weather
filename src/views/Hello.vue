<template>
  <div class="hei">
  <HelloWorld />
  </div>
</template>


<script>
 import HelloWorld from '@/components/HelloWorld.vue';// Tuodaan komponentit


export default {
  name: "hei",
  components: { // Rekisteröidään komponentit
    HelloWorld,
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