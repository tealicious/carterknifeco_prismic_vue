<template>
  <div id="nav">
    <nav-desktop :nav="nav" :logo="logo"/>
    <nav-mobile :nav="nav" :logo="logo"/>
  </div>
</template>
<script>
import NavDesktop from "@organisms/NavDesktop.vue";
import NavMobile from "@organisms/NavMobile.vue";
import navToggleOnScroll from "@utils/nav-toggle-on-scroll";
import navToggles from "@utils/nav-toggles";
export default {
  props: ["nav", "logo"],
  components: {
    NavDesktop,
    NavMobile
  },
  mounted() {
    this.$nextTick(function() {
      navToggles();
      navToggleOnScroll();
    });
  }
};
</script>

