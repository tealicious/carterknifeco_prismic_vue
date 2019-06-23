<template>
  <hero :section="page.hero.primary" v-if="page.hero"></hero>
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
