import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/store";
import AppImage from "@atoms/Image";
import PreFetchRouterLink from "@atoms/PreFetchRouterLink";
import AppBackgroundImage from "@atoms/BackgroundImage";
import lineClamp from "vue-line-clamp";
import "@/scss/application.scss";

Vue.config.productionTip = false;

Vue.component("app-image", AppImage);
Vue.component("background-image", AppBackgroundImage);
Vue.component("pre-fetch-router-link", PreFetchRouterLink);
Vue.use(lineClamp);
Vue.filter("nodash", function(value) {
  if (!value) return "";
  value = value.toString();
  return value.replace(/\-/g, " ");
});

async function init() {
  await store.dispatch("getGlobal");
  await store.dispatch("getKnives");
  new Vue({
    beforeCreate() {},
    router,
    store,
    render: h => h(App)
  }).$mount("#app");
}

init();
