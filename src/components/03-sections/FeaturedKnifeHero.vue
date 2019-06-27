<template>
  <section class="page-hero page-hero featured-knife-hero">
    <div class="hero-wrap">
      <div @click="showFullImage(true)" :style="isPage ? 'cursor:zoom-in;' : ''">
        <background-image class="image-wrap" :image="section.image"/>
      </div>
      <pre-fetch-router-link :page="featuredKnifeLink" class="content" v-if="featuredKnifeLink">
        <p class="anecdotal">Featured Knife</p>
        <h1>{{section.uid.replace(/-/g, ' ')}}</h1>
        <button class="button small">view knife</button>
      </pre-fetch-router-link>
      <div v-else class="content">
        <h5 v-if="section.price && section.for_sale === 'true'">${{section.price}}</h5>
        <h5 v-else class="_strike-thru">SOLD</h5>
        <h1>{{section.uid.replace(/-/g, ' ')}}</h1>
      </div>
    </div>
    <background-image :image="section.image" class="full-image" @click.native="showFullImage(false)" v-if="fullImage"/>
  </section>
</template>
<script>
export default {
  props: ["section", "featuredKnifeLink", "isPage"],
  data() {
    return {
      fullImage: false
    };
  },
  methods: {
    showFullImage(someBool) {
      if (this.isPage) {
        this.fullImage = someBool;
      }
    }
  }
};
</script>