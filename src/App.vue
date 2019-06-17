<template>
  <div id="app">
    <app-nav v-if="nav" :nav="nav.items"/>
    <router-view/>
  </div>
</template>

<script>
import AppNav from "@sections/Nav";
export default {
  components: {
    AppNav
  },
  computed: {
    nav() {
      return this.$store.getters.globalSections.main_nav;
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
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
