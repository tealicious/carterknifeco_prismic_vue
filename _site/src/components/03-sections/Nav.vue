<template>
  <div id="nav">
    <pre-fetch-router-link
      v-for="(page, i) in nav"
      :page="page.page"
      :class="`${page.page.uid}`"
      :key="`${page}-${i}`"
    >{{page.page.uid}}</pre-fetch-router-link>
    <router-link to="/about">About</router-link>
  </div>
</template>
<script>
export default {
  props: ["nav"]
};
</script>

