// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({

  runtimeConfig: {
    // Las claves privadas solo están disponibles del lado del servidor
    TWITCH_CLIENT_SECRET: process.env.TWITCH_CLIENT_SECRET || '',
    
    // Las claves públicas están expuestas al cliente
    public: {
      TWITCH_CLIENT_ID: process.env.TWITCH_CLIENT_ID || '',
      TWITCH_REDIRECT_URI: process.env.TWITCH_REDIRECT_URI || '',
    }
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

  modules: ["@nuxt/eslint", "@nuxt/icon", "@nuxt/image", "@nuxt/content", "@pinia/nuxt"],
});