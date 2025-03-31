// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({

  runtimeConfig: {
    public: {
      twitchClientId: process.env.TWITCH_CLIENT_ID,
    },
    twitchClientSecret: process.env.TWITCH_CLIENT_SECRET,
  },
  css: [
    "~/assets/styles/reset.css",
    "~/assets/styles/variables.css",
    
  ],
  vite: {
    css:{
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/styles/mixins.scss" as *;'
        }
      }
    }
  },
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  modules: ["@nuxt/eslint", "@nuxt/icon", "@nuxt/image", "@nuxt/content"],
});
