<template>
  <nav class="main mobile" id="mobile-main-nav">
    <div class="header">
      <div class="icon-wrap" id="menu-toggle">
        <font-awesome-icon icon="bars" class="menu" />
        <font-awesome-icon icon="times" class="menu-close" />
      </div>
      <pre-fetch-router-link
        :page="nav[0].page"
        :class="`${nav[0].page.uid} home-link`"
        :style="`background-image: url('${logo.url}')`"
      />
      <div class="icon-wrap" id="search-open">
        <font-awesome-icon icon="search" />
      </div>
      <form id="mobile_search" class="blog_search">
        <input type="text" class="universal_search" name="universal_search" placeholder="Search" />
        <button type="submit">
          <font-awesome-icon icon="search" />
        </button>
        <button class="search-close">
          <font-awesome-icon icon="times" />
        </button>
      </form>
    </div>
    <div class="nav-body">
      <ul class="main">
        <li v-for="(page, i) in nav" :key="`${page}-${i}`">
          <pre-fetch-router-link :page="page.page" :class="`${page.page.uid}`">{{page.page.uid | nodash}}</pre-fetch-router-link>
        </li>
        <!--  </ul>
      <ul class="sub">
        <li>
          <a href="{{page.external_links.main_home_url}}" target="_blank">lem home</a>
        </li>
        <li>{% include molecules/social-links.html %}</li>
        <a href="{{page.external_links.shop_url}}" class="button" target="_blank">shop products</a>-->
        <button class="button small">contact</button>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {
  props: ["nav", "logo"]
};
</script>
