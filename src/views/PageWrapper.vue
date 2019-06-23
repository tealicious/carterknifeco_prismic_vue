<template>
  <page :page="page" v-if="page"></page>
</template>

<script>
import Page from "@views/Page";
export default {
  components: {
    Page
  },
  computed: {
    page() {
      return this.$store.getters.currentPage;
    },
    route() {
      return this.$route;
    }
  },
  watch: {
    $route(to) {
      this.$store.dispatch("getSinglePage", to.params.page || to.name);
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  },
  beforeCreate() {
    console.log(this.$route);
    this.$store.dispatch(
      "getSinglePage",
      this.$route.params.page || this.$route.name
    );
  }
};
</script>
