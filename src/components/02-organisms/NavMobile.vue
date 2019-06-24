<template>
  <nav class="main mobile" id="mobile-main-nav">
    <div class="header">
      <div class="icon-wrap" id="menu-toggle">
        <i class="fas fa-bars menu"></i>
        <i class="fas fa-times menu-close"></i>
      </div>
      <pre-fetch-router-link
        :page="nav[0].page"
        :class="`${nav[0].page.uid} home-link`"
        :style="`background-image: url('${logo.url}')`"
      />
      <div class="icon-wrap" id="search-open">
        <i class="fas fa-search search"></i>
      </div>
      <form id="mobile_search" class="blog_search">
        <input type="text" class="universal_search" name="universal_search" placeholder="Search">
        <button type="submit">
          <i class="fas fa-search"></i>
        </button>
        <button class="search-close">
          <i class="fas fa-times"></i>
        </button>
      </form>
    </div>
    <div class="nav-body">
      <ul class="main">
        <!-- {% for link in site.data.main-nav %}
        <li class="{{link.modifier}}">
          <a href="{{link.url}}">{{link.name}}</a>
        </li>
        {% endfor %}
      </ul>
      <ul class="sub">
        {% assign homepage = site.pages | where: '_page', 'homepage' %}
        {% for page in homepage %}
        <li>
          <a href="{{page.external_links.main_home_url}}" target="_blank">lem home</a>
        </li>
        <li>{% include molecules/social-links.html %}</li>
        <a href="{{page.external_links.shop_url}}" class="button" target="_blank">shop products</a>
        {% endfor %}-->
      </ul>
    </div>
  </nav>
</template>
<script>
export default {
  props: ["nav", "logo"]
};
</script>