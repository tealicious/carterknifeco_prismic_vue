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
    <rich-text
      v-for="(rich_text, i) in loopablePage.rich_text"
      :section="rich_text.primary.content_serialized"
      :key="`rich_text${i}`"
      :style="order(rich_text)"
    />
    <content-with-images
      v-for="(content_with_images, i) in loopablePage.content_with_images"
      :section="content_with_images.items"
      :key="`content_with_images${i}`"
      :style="order(content_with_images)"
    />
  </div>
</template>

<script>
import Hero from "@sections/Hero";
import FeaturedKnifeHero from "@sections/FeaturedKnifeHero";
import CardGrid from "@sections/CardGrid";
import RichText from "@sections/RichText";
import ContentWithImages from "@sections/ContentWithImages";
import { createLoopableSections } from "@/constants";
export default {
  props: ["page"],
  components: {
    Hero,
    FeaturedKnifeHero,
    CardGrid,
    RichText,
    ContentWithImages
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
