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
import preFetchHelper from "@mixins/preFetchHelper";
export default {
  mixins: [preFetchHelper],
  props: {
    page: {
      required: true
    },
    tag: {
      type: String,
      default: "a"
    }
  }
};
</script>

