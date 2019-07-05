<template>
  <section class="post-body content post off_background">
    <div container>
      <div grid="row wrap">
        <div column="xs-12 s-12 l-8 +l-2" v-html="section" class="base-font-rules"></div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: ["section"]
};
</script>