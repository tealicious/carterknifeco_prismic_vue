import { createSectionsBySlice } from "@/constants";
import Api from "@api";

const state = {
  pageSections: {},
  allPagesLoaded: false,
  pagesLoaded: [],
  jobs: null
};

const getters = {
  pageSections: state => state.pageSections,
  pagesLoaded: state => state.pagesLoaded
};

const mutations = {
  GET_SINGLE_PAGE(state, doc) {
    state.pagesLoaded.push(doc.uid);
    state.pageSections[doc.uid] = createSectionsBySlice(doc);
  },
  ALL_PAGES_LOADED(state) {
    state.allPagesLoaded = true;
  }
};

const actions = {
  getSinglePage: (context, payload) => {
    if (!context.state.pageSections[payload]) {
      return new Api().getSingleBySlug(payload).then(res => {
        context.commit("GET_SINGLE_PAGE", res);
        context.dispatch(
          "changeNavColor",
          context.state.pageSections[payload].nav_color
        );
        if (!context.getters.firstRouteLoaded) {
          context.commit("PREVENT_PRELOAD", {
            name: payload,
            id: res.id
          });
        }
      });
    } else {
      context.dispatch(
        "changeNavColor",
        context.state.pageSections[payload].nav_color
      );
    }
  },
  setSinglePage: (context, payload) => {
    context.dispatch(
      "changeNavColor",
      context.state.pageSections[payload].nav_color
    );
  },
  getAllPages: context => {
    if (!context.state.allPagesLoaded) {
      return new Api().getAllSinglePages().then(res => {
        res.results.map(page => {
          context.commit("GET_SINGLE_PAGE", page.data);
        });
        context.commit("ALL_PAGES_LOADED");
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
