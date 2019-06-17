import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/store";
import AppImage from "@atoms/Image";
import PreFetchRouterLink from "@atoms/PreFetchRouterLink";
import AppBackgroundImage from "@atoms/BackgroundImage";
import "@/scss/application.scss";

Vue.config.productionTip = false;

Vue.component("app-image", AppImage);
Vue.component("background-image", AppBackgroundImage);
Vue.component("pre-fetch-router-link", PreFetchRouterLink);

new Vue({
  beforeCreate() {
    store.dispatch("getGlobal");
  },
  router,
  store,
  render: h => h(App)
}).$mount("#app");
