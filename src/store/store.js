import Vue from "vue";
import Vuex from "vuex";
import imagePreloading from "@store/modules/imagePreloading";
import singlePages from "@store/modules/singlePages";
import globalSections from "@store/modules/globalSections";
import knives from "@store/modules/knives";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    imagePreloading,
    singlePages,
    globalSections,
    knives
  }
});
