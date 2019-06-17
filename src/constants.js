export const prismicEndpoint = "https://carterknifeco.cdn.prismic.io/api/v2";

import linkResolver from "@/utils/link-resolver";
import htmlSerializer from "@/utils/html-serializer";
import prismicDOM from "prismic-dom";

export const objectSize = function(obj) {
  let size = 0,
    key;
  for (key in obj) {
    if (obj.hasOwnProperty(key)) size++;
  }
  return size;
};

export const flatten = function(data) {
  var result = {};
  function recurse(cur, prop) {
    if (Object(cur) !== cur) {
      result[prop] = cur;
    } else if (Array.isArray(cur)) {
      for (var i = 0, l = cur.length; i < l; i++)
        recurse(cur[i], prop + "[" + i + "]");
      if (l == 0) result[prop] = [];
    } else {
      var isEmpty = true;
      for (var p in cur) {
        isEmpty = false;
        recurse(cur[p], prop ? prop + "." + p : p);
      }
      if (isEmpty && prop) result[prop] = {};
    }
  }
  recurse(data, "");
  return result;
};

export const preloadImages = function(array) {
  const imageArray = [];
  array.map(image => {
    if (
      image.toLowerCase().includes("png") ||
      image.toLowerCase().includes("jpg") ||
      image.toLowerCase().includes("jpeg") ||
      image.toLowerCase().includes("svg")
    ) {
      imageArray.push(image);
    }
  });
  if (!preloadImages.list) {
    preloadImages.list = [];
  }
  var list = preloadImages.list;
  for (var i = 0; i < imageArray.length; i++) {
    var img = new Image();
    img.onload = function() {
      var index = list.indexOf(this);
      if (index !== -1) {
        // remove image from the array once it's loaded
        // for memory consumption reasons
        list.splice(index, 1);
      }
    };
    list.push(img);
    img.src = imageArray[i];
  }
};

export const setSectionRichText = function(section) {
  const keys = Object.keys(section);
  keys.map(key => {
    if (section[key]) {
      if (section[key]["primary"]) {
        const primeKeys = Object.keys(section[key]["primary"]);
        primeKeys.map(pKey => {
          if (Array.isArray(section[key]["primary"][pKey])) {
            section[key]["primary"][
              `${pKey}_serialized`
            ] = prismicDOM.RichText.asHtml(
              section[key]["primary"][pKey],
              linkResolver,
              pKey === "blog_post_rich_text"
                ? htmlSerializer
                : simpleHtmlSerializer
            );
          }
        });
      }
      if (section[key]["items"]) {
        const items = section[key]["items"];
        items.map(item => {
          const itemKeys = Object.keys(item);
          itemKeys.map(iKey => {
            if (Array.isArray(item[iKey])) {
              item[`${iKey}_serialized`] = prismicDOM.RichText.asHtml(
                item[iKey],
                linkResolver,
                simpleHtmlSerializer
              );
            }
          });
        });
      }
    }
  });
  return section;
};

export const sectionBySliceType = (data, section, i) => {
  let slice = data.find(obj => {
    return obj === section;
  });
  if (i) {
    slice.index = i;
  }
  return slice;
};

export const createSectionsBySlice = function(doc) {
  const newObject = { ...doc };
  if (doc.body) {
    const body = [...doc.body];
    let count = {};
    body.map(section => {
      let label = section.slice_type;
      count[label] = 1;
    });
    body.map((section, i) => {
      let label = section.slice_type;
      if (newObject[label] !== undefined) {
        newObject[`${label}_${count[label] + 1}`] = sectionBySliceType(
          body,
          section,
          i
        );
        count[label] += 1;
      } else {
        newObject[label] = sectionBySliceType(body, section, i);
      }
    });
  }
  const allSectionsReady = setSectionRichText(newObject);
  return allSectionsReady;
};

export const tabletUp = window.innerWidth > 767;

export const filterDash = function(word) {
  return word.split("-").join(" ");
};

export const isSVG = function(imageSrc) {
  return imageSrc.split(".").pop() === "svg";
};

export const queuePreLoadedImages = function(
  nestedDataSet,
  uniquePageFetch = false,
  filter
) {
  const flatRes = flatten(nestedDataSet);
  const imageUrls = [];
  Object.keys(flatRes).map(name => {
    if (!uniquePageFetch) {
      if (
        (name.includes("image") && name.includes("url")) ||
        (name.includes("icon") && name.includes("url")) ||
        (name.includes("inline_vector_graphic") && name.includes("url"))
      ) {
        imageUrls.push(name);
      }
    } else {
      if (
        (name.includes(filter) ||
          name.includes("icon") ||
          name.includes("inline_vector_graphic")) &&
        name.includes("url")
      ) {
        imageUrls.push(name);
      }
    }
  });

  const images = {
    imageUrls: [],
    imageObjects: []
  };

  imageUrls.map(keyName => {
    const image = {};
    image[keyName] = flatRes[keyName];
    images.imageObjects.push(image);
    images.imageUrls.push(flatRes[keyName]);
  });

  return images;
};

export const createLoopableSections = function(pageObject) {
  const sections = {};
  const sectionTypes = Object.keys({ ...pageObject });
  sectionTypes.map(sectionType => {
    let duplicate = false;
    let dupeSection;
    sectionTypes.map(sectionTypeB => {
      if (
        sectionType.includes(sectionTypeB) &&
        sectionType !== sectionTypeB &&
        Number.isInteger(
          parseInt(sectionType.substring(sectionType.lastIndexOf("_") + 1))
        )
      ) {
        duplicate = true;
        dupeSection = sectionTypeB;
      }
    });
    if (duplicate) {
      sections[dupeSection].push(pageObject[sectionType]);
    } else {
      sections[sectionType] = [];
      sections[sectionType].push(pageObject[sectionType]);
    }
  });
  return sections;
};
