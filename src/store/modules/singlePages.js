import { createSectionsBySlice } from "@/constants";
import Api from "@api";

const state = {
  currentPage: {}
};

const getters = {
  currentPage: state => state.currentPage
};

const mutations = {
  GET_SINGLE_PAGE(state, doc) {
    state.currentPage = createSectionsBySlice(doc);
  }
};

const actions = {
  getSinglePage: (context, payload) => {
    return new Api().getSingleBySlug(payload).then(res => {
      context.commit("GET_SINGLE_PAGE", res);
    });
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
