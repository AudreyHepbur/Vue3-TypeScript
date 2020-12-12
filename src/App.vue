<template>
  <router-link to="/home">Home</router-link> |
  <router-link to="/about">About</router-link>
  <h3></h3>
  <router-view></router-view>
</template>
<script lang="ts">
import Home from "./views/Home.vue";
export default {
  name: "App",
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
