<template>
  <div
    class="faux-image"
    :style="`background-image: url(${setImage()})`"
    :aria-label="setAlt()"
    @click.self="showFullImage(true)"
    style="cursor:zoom-in;"
  >
    <slot></slot>
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
  props: ["image"],
  data() {
    return {
      fullImage: false
    };
  },
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
    },
    showFullImage(someBool) {
      this.fullImage = someBool;
    }
  },
  mounted() {
    this.$emit("init");
  }
};
</script>
