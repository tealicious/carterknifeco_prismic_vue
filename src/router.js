import Vue from "vue";
import Router from "vue-router";
import PageWrapper from "./views/PageWrapper.vue";
import KnifeWrapper from "./views/KnifeWrapper.vue";

Vue.use(Router);

export default new Router({
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: "/",
      name: "home",
      component: PageWrapper
    },
    {
      path: "/:page",
      component: PageWrapper
    },
    {
      path: "/knife/:knife",
      component: KnifeWrapper
    }
  ]
});
