<template>
  <div id="app"> 
    <div class="nav">
      <router-link to="/" class="nav_link">Säätiedot</router-link>
      <router-link to="/saakirja" class="nav_link">Sääkirja</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss"> // TYYLIT 🖍️
  @import url('https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400&display=swap&subset=cyrillic');

  body {
    font-family: 'Montserrat', sans-serif;
    max-height: 100vh;
  }

  .nav {
    color: #153B50;
    text-decoration-color: rgba($color: #153B50, $alpha: 0.5);
    transition: all 0.3s ease;

    &:hover {
      text-decoration-color: #153B50;
    }
  }

  .nav {
   
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }

  .nav_link {
    &:not(:last-child) {
      margin-right: 15px;
    }
  }
</style>
