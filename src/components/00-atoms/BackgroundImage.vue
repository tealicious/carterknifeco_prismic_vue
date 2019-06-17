<template>
  <div class="faux-image" :style="`background-image: url(${setImage()})`" :aria-label="setAlt()">
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: ["image"],
  methods: {
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
  },
  mounted() {
    this.$emit("init");
  }
};
</script>