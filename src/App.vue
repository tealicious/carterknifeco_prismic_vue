<template>
  <div id="app">
    <app-nav v-if="nav" :nav="nav.items" :logo="nav.primary.logo_image"/>
    <router-view/>
    <div style="height:200vh" class="off_background"></div>
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
