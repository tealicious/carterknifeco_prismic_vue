// vue.config.js
const conciseEmulationPlugins = [
  require("postcss-input-range")(),
  require("postcss-lh")(),
  require("postcss-custom-media")(),
  require("postcss-media-minmax")(),
  require("autoprefixer")()
];
const path = require("path");
module.exports = {
  baseUrl: process.env.NODE_ENV === "development" ? "/carterknifeco/" : "/",
  productionSourceMap: false,
  configureWebpack: {
    resolve: {
      alias: {
        "@svg": path.resolve(__dirname, "src/components/00-svg"),
        "@particles": path.resolve(__dirname, "src/components/01-particles"),
        "@atoms": path.resolve(__dirname, "src/components/02-atoms"),
        "@molecules": path.resolve(__dirname, "src/components/03-molecules"),
        "@organisms": path.resolve(__dirname, "src/components/04-organisms"),
        "@sections": path.resolve(__dirname, "src/components/05-sections"),
        "@views": path.resolve(__dirname, "src/components/06-views"),
        "@icons": path.resolve(__dirname, "src/assets/icons"),
        "@utils": path.resolve(__dirname, "src/utils"),
        "@mixins": path.resolve(__dirname, "src/mixins"),
        "@data": path.resolve(__dirname, "src/data"),
        "@router": path.resolve(__dirname, "src/router"),
        "@store": path.resolve(__dirname, "src/store"),
        "@api": path.resolve(__dirname, "src/Api"),
        "@node": path.resolve(__dirname, "node_modules")
      }
    }
  },
  css: {
    sourceMap: true,
    loaderOptions: {
      sass: {
        data: `@import "@/scss/_vars.scss"; @import "@/scss/_mixins.scss";`
      },
      postcss: {
        plugins: conciseEmulationPlugins
      }
    }
  }
};
