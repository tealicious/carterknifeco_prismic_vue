<template>
  <div>
    <hero :section="page.hero.primary" v-if="page.hero"></hero>
    <featured-knife-hero
      :section="featuredKnife"
      :featuredKnifeLink="page.featured_knife.primary.featured_knife"
      v-if="featuredKnife"
    ></featured-knife-hero>
    <card-grid v-if="page.show_knives_card_grid"/>
    <!-- <hero v-for="(hero, i) in loopablePage.hero" :section="hero.primary" :key="`hero${i}`" :style="order(hero)"></hero> -->
  </div>
</template>

<script>
import Hero from "@sections/Hero";
import FeaturedKnifeHero from "@sections/FeaturedKnifeHero";
import CardGrid from "@sections/CardGrid";
import { createLoopableSections } from "@/constants";
export default {
  props: ["page"],
  components: {
    Hero,
    FeaturedKnifeHero,
    CardGrid
  },
  computed: {
    loopablePage() {
      return createLoopableSections(this.page);
    },
    knives() {
      return this.$store.getters.knives;
    },
    featuredKnifeID() {
      return this.page.featured_knife
        ? this.page.featured_knife.primary.featured_knife.id || undefined
        : undefined;
    },
    featuredKnife() {
      return this.knives.find(knife => knife.id === this.featuredKnifeID);
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
