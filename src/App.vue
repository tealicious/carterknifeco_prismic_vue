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
