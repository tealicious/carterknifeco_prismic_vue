export default {
  methods: {
    route(route) {
      return route.uid === "home" ? `/` : `/${route.uid}`;
    },
    preFetch(route) {
      this.$store.dispatch("preFetchPage", route.id);
    }
  }
};
