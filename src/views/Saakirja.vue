<template>
  <div>
  <SaakirjaComponentti />
  </div>
</template>


<script>
 import SaakirjaComponentti from '@/components/Saakirja-componentti.vue';// Tuodaan komponentit


export default {
  components: { // Rekisteröidään komponentit
    SaakirjaComponentti,
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