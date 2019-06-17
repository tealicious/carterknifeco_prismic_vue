export default {
  methods: {
    route(route) {
      return route.slug === "home" ? `/` : `/${route.uid}`;
    },
    preFetch(route) {
      this.$store.dispatch("preFetchPage", route.id);
    }
  }
};
