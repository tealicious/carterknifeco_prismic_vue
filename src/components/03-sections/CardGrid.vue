<template>
  <section class="card-grid">
    <div container>
      <div grid="row wrap stretch" id="post_results">
        <card v-for="(knife, i) in knives" :key="i" :knife="knife"/>
      </div>
    </div>
  </section>
</template>
<script>
import Card from "@molecules/Card.vue";
export default {
  components: { Card },
  computed: {
    knives() {
      return this.$store.getters.knives;
    }
  }
};
</script>

