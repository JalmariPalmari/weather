<template>
  <div>
  <KalastuskirjaComponentti />
  </div>
</template>


<script>
 import KalastuskirjaComponentti from '@/components/Saakirja-componentti.vue';// Tuodaan komponentit


export default {
  components: { // Rekisteröidään komponentit
    KalastuskirjaComponentti,
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