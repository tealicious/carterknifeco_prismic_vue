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
  mounted() {
    this.$store.dispatch("getSinglePage", this.$route.name);
  }
};
</script>
