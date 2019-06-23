import { preloadImages, queuePreLoadedImages, tabletUp } from "@/constants";
import Api from "@api";

const state = {
  firstRouteLoaded: false,
  priorImageDocRequests: []
};

const getters = {
  firstRouteLoaded: state => state.firstRouteLoaded
};

const mutations = {
  PRELOAD_IMAGES(state, payload) {
    state.priorImageDocRequests.push(payload.ID);
    preloadImages([...new Set(payload.images)]);
  },
  PREVENT_PRELOAD(state, payload) {
    state.priorImageDocRequests.push(payload.id);
  }
};

const actions = {
  preFetchPage: (context, ID) => {
    if (context.state.priorImageDocRequests.includes(ID) || !tabletUp) {
      return;
    }
    return new Api().getDocByID(ID).then(res => {
      const images = queuePreLoadedImages(res);
      context.commit("PRELOAD_IMAGES", {
        ID: ID,
        images: images.imageUrls
      });
    });
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
