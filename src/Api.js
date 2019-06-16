import Prismic from "prismic-javascript";
import { prismicEndpoint } from "@/constants";

export default class Api {
  getDocByID(ID) {
    return Prismic.getApi(prismicEndpoint).then(api => {
      return api
        .getByID(ID)
        .then(res => res)
        .catch(err => {
          throw err;
        });
    });
  }

  getAllDocs() {
    return Prismic.getApi(prismicEndpoint).then(api => {
      return api
        .query()
        .then(res => res)
        .catch(err => {
          throw err;
        });
    });
  }

  getAllSinglePages() {
    return Prismic.getApi(prismicEndpoint).then(api => {
      return api
        .query(Prismic.Predicates.at("document.type", "single_page"), {
          pageSize: 100
        })
        .then(res => res)
        .catch(err => {
          throw err;
        });
    });
  }

  getSingleBySlug(slug) {
    return Prismic.getApi(prismicEndpoint).then(api => {
      return api
        .getByUID("single_page", slug)
        .then(res => {
          return { ...res.data, id: res.id, uid: res.uid };
        })
        .catch(err => {
          throw err;
        });
    });
  }

  getGlobalSections() {
    return Prismic.getApi(prismicEndpoint).then(api => {
      return api
        .query(Prismic.Predicates.at("document.type", "global_sections"))
        .then(res => res.results[0].data)
        .catch(err => {
          throw err;
        });
    });
  }

  getInlineSVG(imageSrc) {
    return fetch(imageSrc, { cache: "reload" }).then(res => {
      return res.text();
    });
  }
}
