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
    this.$store.dispatch(
      "getSinglePage",
      this.$route.params.page || this.$route.name
    );
  }
};
</script>
