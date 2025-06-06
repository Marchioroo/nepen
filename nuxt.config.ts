import Components from "unplugin-vue-components/vite";
import { NaiveUiResolver } from "unplugin-vue-components/resolvers";

export default defineNuxtConfig({
  modules: ["nuxtjs-naive-ui", "@nuxt/image", "@pinia/nuxt"],

  css: [
    "@/assets/css/tailwind.css",
    "@fontsource/montserrat/700.css",
    "@fontsource/inter/400.css",
    "@fontsource/inter/500.css",
    "@fontsource/inter/700.css",
    "@fontsource/inter/900.css", // Tailwind CSS
  ],

  plugins: [
    "~/plugins/naive-ui.ts", // Plugin para configurar o Naive UI
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  vite: {
    plugins: [
      Components({
        resolvers: [NaiveUiResolver()], // Resolver automático para componentes do Naive UI
      }),
    ],
  },
  pages: true,

  compatibilityDate: "2025-01-13",
});
