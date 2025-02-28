// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  routeRules: {
    '/': { redirect: '/damac-islands' }
  },
  components: [{ path: "~/components", pathPrefix: false }],
  css: ['~/assets/css/main.css', '~/assets/css/global.css'],
  modules: ["@pinia/nuxt", "@zadigetvoltaire/nuxt-gtm"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    public: {
      mapKey: process.env.NUXT_PUBLIC_GOOGLE_MAPS_API_KEY,
      baseURL: process.env.NUXT_PUBLIC_BASE_API_URL,
      fcApiKey: process.env.NUXT_PUBLIC_FC_API_KEY,
      gtagId: process.env.NUXT_PUBLIC_GTM_ID,
      gtm: {
        id: process.env.NUXT_PUBLIC_GTM_ID!,
      }
    }
  }
})
