<template>
  <section class="page-hero page-hero featured-knife-hero">
    <div class="hero-wrap">
      <div>
        <background-image class="image-wrap" :image="section.image"/>
      </div>
      <pre-fetch-router-link :page="featuredKnifeLink" class="content">
        <p class="anecdotal">Featured Knife</p>
        <h1>{{section.uid.replace(/-/g, ' ')}}</h1>
        <button class="button small">view knife</button>
      </pre-fetch-router-link>
    </div>
    <!-- <div container>{{>molecules-breadcrumb}}</div> -->
  </section>
</template>
<script>
export default {
  props: ["section", "featuredKnifeLink"]
};
</script>