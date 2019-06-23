<template>
  <nav class="main desktop">
    <div container>
      <div grid="row wrap">
        <div column="2" class="logo-wrap">
          <a href="/" aria-describedby="home link" style="background-image: url('/images/icons/logo.svg')"></a>
        </div>
        <div column="10" class="nav-wrapper">
          <div column="12" class="sub">
            <a href="#" class="back-home">
              <i class="fas fa-chevron-left"></i>home
            </a>
            <form class="blog_search">
              <input type="text" class="universal_search" name="universal_search" placeholder="Search">
              <button type="submit">
                <i class="fas fa-search"></i>
              </button>
            </form>
            <ul class="social">
              <li>
                <a href="#" target="_blank">
                  <i class="fab fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <i class="fab fa-pinterest"></i>
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <i class="fab fa-youtube"></i>
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <i class="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
          <div column="12" class="main">
            <ul>
              <li v-for="(page, i) in nav" :key="`${page}-${i}`">
                <pre-fetch-router-link :page="page.page" :class="`${page.page.uid}`">{{page.page.uid}}</pre-fetch-router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  props: ["nav"]
};
</script>