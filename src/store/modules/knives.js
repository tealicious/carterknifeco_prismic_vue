import Api from "@api";

const state = {
  knives: []
};

const getters = {
  knives: state => state.knives
};

const mutations = {
  GET_KNIVES(state, doc) {
    state.knives.push(doc);
  }
};

const actions = {
  getKnives: context => {
    return new Api().getKnives().then(res => {
      context.commit("GET_KNIVES", res);
    });
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
