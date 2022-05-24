// const { defineConfig } = require('@vue/cli-service')
module.exports = {
  publicPath: "/Clen-UpVue/",
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/scss/app.scss";`,
      },
    },
  },
};
