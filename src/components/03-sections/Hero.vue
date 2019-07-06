<template>
  <section class="page-hero page-hero">
    <div class="hero-wrap">
      <div>
        <background-image class="image-wrap" :image="section.image"/>
      </div>
      <div class="content">
        <div v-html="section.title_serialized"></div>
        <div v-html="section.description_serialized"></div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: ["section"]
};
</script>
