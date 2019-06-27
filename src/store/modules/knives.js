import Api from "@api";
import { setSimpleSectionRichText } from "@/constants";
const state = {
  knives: [],
  currentKnife: null
};

const getters = {
  knives: state => state.knives,
  currentKnife: state => state.currentKnife
};

const mutations = {
  GET_KNIVES(state, doc) {
    const knives = [];
    doc.map(knife => {
      knife.type = "knife_page";
      knives.push(setSimpleSectionRichText(knife));
    });
    state.knives = knives;
  },
  SET_CURRENT_KNIFE(state, currentKnife) {
    state.currentKnife = state.knives.find(knife => knife.uid === currentKnife);
  }
};

const actions = {
  getKnives: context => {
    return new Api().getKnives().then(res => {
      context.commit("GET_KNIVES", res);
    });
  },
  setCurrentKnife: (context, payload) => {
    context.commit("SET_CURRENT_KNIFE", payload);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
