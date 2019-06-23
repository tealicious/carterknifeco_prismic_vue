<template>
  <router-link
    :tag="tag"
    :to="route(page)"
    v-if="route(page)"
    @mouseover.native.once="preFetch(page)"
    @focus.native.once="preFetch(page)"
  >
    <slot></slot>
  </router-link>
</template>
<script>
export default {
  props: {
    page: {
      required: true
    },
    tag: {
      type: String,
      default: "a"
    }
  },
  methods: {
    route(route) {
      let url;
      switch (route.type) {
        case "knife_page":
          url = `/knife/${route.uid}`;
          break;
        default:
          if (route.uid === "home") {
            url = `/`;
          } else {
            url = `/${route.uid}`;
          }
      }
      return url;
    },
    preFetch(route) {
      this.$store.dispatch("preFetchPage", route.id);
    }
  }
};
</script>

