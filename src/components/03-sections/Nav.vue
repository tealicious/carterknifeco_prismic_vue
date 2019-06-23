<template>
  <div id="nav">
    <!-- <pre-fetch-router-link
      v-for="(page, i) in nav"
      :page="page.page"
      :class="`${page.page.uid}`"
      :key="`${page}-${i}`"
    >{{page.page.uid}}</pre-fetch-router-link>-->
    <nav-desktop :nav="nav" @mounted/>
    <nav-mobile :nav="nav" @mounted/>
  </div>
</template>
<script>
import NavDesktop from "@organisms/NavDesktop.vue";
import NavMobile from "@organisms/NavMobile.vue";
import navToggleOnScroll from "@utils/nav-toggle-on-scroll";
import navToggles from "@utils/nav-toggles";
export default {
  props: ["nav"],
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

