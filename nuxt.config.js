export default {
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ]
  },
  components: true,
  buildModules: [
    '@nuxtjs/vuetify'
  ],
  vuetify: {
    theme: {
      dark: false,
    }
  },
}
