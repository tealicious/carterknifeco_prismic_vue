<template>
  <nav class="main desktop">
    <div container>
      <div grid="row wrap">
        <div column="3" class="logo-wrap">
          <pre-fetch-router-link
            :page="nav[0].page"
            :class="`${nav[0].page.uid}`"
            :style="`background-image: url('${logo.url}')`"
          />
        </div>
        <div column="9" class="back-home">
          <div column="12" class="sub">
            <pre-fetch-router-link :page="nav[0].page" :class="`${nav[0].page.uid}`">
              <i class="fas fa-chevron-left"></i>home
            </pre-fetch-router-link>
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
                <pre-fetch-router-link :page="page.page" :class="`${page.page.uid}`">{{page.page.uid | nodash}}</pre-fetch-router-link>
              </li>
            </ul>
            <button class="button small gold">contact</button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  props: ["nav", "logo"]
};
</script>
