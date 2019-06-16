import { createSectionsBySlice } from "@/constants";

import Api from "@api";

const state = {
  globalSections: {},
  globalGotten: false
};

const getters = {
  globalGotten: state => state.globalGotten,
  globalSections: state => state.globalSections
};

const mutations = {
  GET_GLOBAL_COMPONENTS(state, doc) {
    state.globalSections = createSectionsBySlice(doc);
    state.globalGotten = true;
  }
};

const actions = {
  getGlobal: context => {
    if (!context.state.globalGotten) {
      return new Api().getGlobalSections().then(res => {
        context.commit("GET_GLOBAL_COMPONENTS", res);
      });
    }
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
