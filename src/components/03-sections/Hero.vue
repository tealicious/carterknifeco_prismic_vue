<template>
  <section class="page-hero page-hero">
    <div class="hero-wrap">
      <div @click="showFullImage(true)" style="cursor:zoom-in;">
        <background-image class="image-wrap" :image="section.image"/>
      </div>
      <div class="content">
        <div v-html="section.title_serialized"></div>
        <div v-html="section.description_serialized"></div>
      </div>
    </div>
    <background-image :image="section.image" class="full-image" @click.native="showFullImage(false)" v-if="fullImage"/>
  </section>
</template>
<script>
export default {
  props: ["section"],
  data() {
    return {
      fullImage: false
    };
  },
  methods: {
    showFullImage(someBool) {
      this.fullImage = someBool;
    }
  }
};
</script>