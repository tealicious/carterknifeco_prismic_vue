import Vue from "vue";
import Router from "vue-router";
import PageWrapper from "./views/PageWrapper.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: PageWrapper
    }
  ]
});
