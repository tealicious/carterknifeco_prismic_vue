<template>
  <div>
    <featured-knife-hero :section="knife" :isPage="true"></featured-knife-hero>
  </div>
</template>

<script>
import Hero from "@sections/Hero";
import FeaturedKnifeHero from "@sections/FeaturedKnifeHero";
import CardGrid from "@sections/CardGrid";
import { createLoopableSections } from "@/constants";
export default {
  props: ["knife"],
  components: {
    Hero,
    FeaturedKnifeHero,
    CardGrid
  },
  computed: {
    knives() {
      return this.$store.getters.knives;
    }
  },
  methods: {
    order(section) {
      return {
        order: section.index * 2
      };
    }
  }
};
</script>
