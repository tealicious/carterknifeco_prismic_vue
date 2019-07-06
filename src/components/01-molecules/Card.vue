<template>
  <pre-fetch-router-link :page="knife" column="xs-12 s-12 m-6 l-4" class="card">
    <div>
      <div class="image-wrap">
        <!-- <app-image :image="knife.image"/> -->
        <div
          class="faux-image"
          :style="`background-image: url(${setImage(knife.image)})`"
          :aria-label="setAlt(knife.image)"
        />
      </div>
      <div class="card-content">
        <h5 v-if="knife.price && knife.for_sale === 'true'">${{knife.price}}</h5>
        <h5 v-else class="_strike-thru">SOLD</h5>
        <h3 v-line-clamp:43="2">{{knife.uid.replace(/-/g, ' ')}}</h3>
        <div class="excerpt">
          <p v-line-clamp:28="3">{{knife.description[0].text}}</p>
        </div>
        <button class="button small">view knife</button>
      </div>
    </div>
  </pre-fetch-router-link>
</template>
<script>
export default {
  props: ["knife"],
  methods: {
    setImage(image) {
      return window.innerWidth < 768 && image.mobile
        ? image.mobile.url
        : image.url;
    },
    setAlt(image) {
      return window.innerWidth < 768 && image.mobile
        ? image.mobile.alt
        : image.alt;
    }
  }
};
</script>
