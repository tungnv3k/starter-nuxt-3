import CustomAura from "./presets/themes/CustomAura";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "@nuxt/eslint",
    "@nuxtjs/tailwindcss",
    "@primevue/nuxt-module",
    "@pinia/nuxt",
  ],
  css: ["~/assets/scss/main.scss"],
  primevue: {
    options: {
      ripple: true,
      theme: {
        preset: CustomAura,
        options: {
          darkModeSelector: ".dark-mode",
        },
      },
    },
  },
});
