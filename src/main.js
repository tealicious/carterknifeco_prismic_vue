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
// font awesome icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faCaretDown,
  faCaretRight,
  faCaretLeft,
  faChevronDown,
  faChevronLeft,
  faSpinner,
  faSearch,
  faBars,
  faTimes,
  faMapMarker,
  faExternalLinkAlt,
  faCar
} from "@fortawesome/free-solid-svg-icons";
import { faPlayCircle } from "@fortawesome/free-regular-svg-icons";
import {
  faTwitter,
  faPinterest,
  faLinkedin,
  faFacebook,
  faFacebookF,
  faYoutube,
  faYoutubeSquare,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
library.add(
  faTwitter,
  faLinkedin,
  faPinterest,
  faFacebook,
  faYoutube,
  faYoutubeSquare,
  faInstagram,
  faFacebookF,
  faCaretDown,
  faCaretRight,
  faCaretLeft,
  faChevronDown,
  faChevronLeft,
  faSpinner,
  faPlayCircle,
  faSearch,
  faTimes,
  faBars,
  faMapMarker,
  faExternalLinkAlt,
  faCar
);
Vue.component("font-awesome-icon", FontAwesomeIcon);

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
