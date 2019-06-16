import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/store";
import AOS from "aos";
import "@/scss/application.scss";

Vue.config.productionTip = false;

new Vue({
  mounted() {
    AOS.init({
      disable: "phone",
      easing: "cubic-bezier(.68,-.1,.265,1.55)",
      offset: 100,
      once: true
    });
  },
  router,
  store,
  render: h => h(App)
}).$mount("#app");
