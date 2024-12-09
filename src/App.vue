<template>
  <img alt="Vue logo" src="./assets/Github_DP.png" />
  <LandingComponent />
</template>

<script>
import LandingComponent from "./components/LandingComponent.vue";

export default {
  name: "App",
  components: {
    LandingComponent,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

img {
  max-width: 400px;
  max-height: 400px;
  border-radius: 50%;
}
</style>
