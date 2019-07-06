<template>
  <div>
    <img :src="setImage()" :alt="setAlt()" @load="loaded" @click="showFullImage(true)" style="cursor:zoom-in;">
    <div
      class="faux-image full-image"
      :style="`background-image: url(${setImage()})`"
      :aria-label="setAlt()"
      @click.self="showFullImage(false)"
      v-if="fullImage"
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      finishedLoading: false,
      fullImage: false
    };
  },
  props: {
    image: {
      required: true
    },
    uid: {
      required: false,
      default: null
    }
  },
  methods: {
    loaded() {
      if (!this.finishedLoading) {
        this.finishedLoading = true;
        this.$emit("loaded");
      }
    },
    setImage() {
      return window.innerWidth < 768 && this.image.mobile
        ? this.image.mobile.url
        : this.image.url;
    },
    setAlt() {
      return window.innerWidth < 768 && this.image.mobile
        ? this.image.mobile.alt
        : this.image.alt;
    },
    showFullImage(someBool) {
      this.fullImage = someBool;
    }
  }
};
</script>
