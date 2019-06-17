<template>
  <section class="single-page-title">
    <div container>
      <div grid="row wrap">
        <div column="xs-12 l-10 +l-1" class="_text-center">
          <h1>{{page.title}}</h1>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: ["page"]
};
</script>