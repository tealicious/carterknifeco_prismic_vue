<template>
  <knife-page :knife="knife" v-if="knife"></knife-page>
</template>

<script>
import KnifePage from "@views/KnifePage";
export default {
  components: {
    KnifePage
  },
  computed: {
    knife() {
      return this.$store.getters.currentKnife;
    }
  },
  watch: {
    $route(to) {
      this.$store.dispatch("setCurrentKnife", to.params.knife);
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  },
  beforeCreate() {
    this.$store.dispatch("setCurrentKnife", this.$route.params.knife);
  }
};
</script>
