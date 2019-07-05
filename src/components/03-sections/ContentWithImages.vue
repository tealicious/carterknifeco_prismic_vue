<template>
  <section class="post-body content post off_background">
    <div container>
      <div grid="row wrap">
        <div column="xs-12 s-12" class="base-font-rules">
          <p v-for="(item, i) in section" :key="i">
            <template v-for="(text, j) in item.content">
              <template v-if="j===0">
                <app-image :image="item.image" :key="j"/>
                {{text.text}}
              </template>
              <template v-else>{{text.text}}</template>
              <br :key="j">
              <br :key="j">
            </template>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: ["section"]
};
</script>