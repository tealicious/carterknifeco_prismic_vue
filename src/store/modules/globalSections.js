import { createSectionsBySlice } from "@/constants";

import Api from "@api";

const state = {
  globalSections: {}
};

const getters = {
  globalSections: state => state.globalSections
};

const mutations = {
  GET_GLOBAL_COMPONENTS(state, doc) {
    state.globalSections = createSectionsBySlice(doc);
  }
};

const actions = {
  getGlobal: context => {
    return new Api().getGlobalSections().then(res => {
      context.commit("GET_GLOBAL_COMPONENTS", res);
    });
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
