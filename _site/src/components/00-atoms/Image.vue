<template>
  <img :src="setImage()" :alt="setAlt()" @load="loaded">
</template>
<script>
export default {
  data() {
    return {
      finishedLoading: false
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
    }
  }
};
</script>
