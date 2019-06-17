<template>
  <hero :page="page"></hero>
</template>

<script>
import Hero from "@sections/Hero";
export default {
  props: ["page"],
  components: {
    Hero
  }
};
</script>
