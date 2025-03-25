// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    "~/assets/styles/reset.css",
    "~/assets/styles/variables.css",
    "~/assets/styles/mixins.scss",
  ],
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  modules: ["@nuxt/eslint", "@nuxt/icon", "@nuxt/image", "@nuxt/content"],
});
