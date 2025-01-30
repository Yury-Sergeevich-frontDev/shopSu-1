// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/icon', '@nuxt/image'],
  css: ['~/assets/scss/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/utils/_variables.scss"; @use "~/assets/scss/utils/_mixins.scss";'

        },
      },
    },
  },

  components: [
    {
      path: '~/components',
      pathPrefix: false,
    }
  ],

})
