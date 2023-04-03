export default defineNuxtConfig({
  // app, plugins, css, build, vite not working
  app: {
    head: {
      title: "Nuxt 3 App",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=2",
    },
  },
  plugins: [],
  css: [],
  build: {},
  vite: {},
  // modules, typescript working
  modules: [],
  typescript: {
    strict: true,
  },
});
