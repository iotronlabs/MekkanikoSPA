import colors from 'vuetify/es5/util/colors'

export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_description,
    title: process.env.npm_package_name || '',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#fff'
  },
  /*
   ** Global CSS
   */
  css: ['vue-slick-carousel/dist/vue-slick-carousel.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '@/plugins/google-maps',
    {
      src: './plugins/vue-slick-carousel.js'
    },
    {
      src: '~/plugins/vee-validate.js',

    }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxtjs/vuetify',
    '@aceforth/nuxt-optimized-images',
    '@nuxtjs/gtm'
  ],
  webfontloader: {
    custom: {
      families: ['Montserrat'],
      urls: [
        // for each Google Fonts add url + options you want
        // here add font-display option
        'https://fonts.googleapis.com/css?family=Montserrat:300,400,500,700&display=swap',

      ]
    }
  },

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/auth',
    '@nuxtjs/dotenv',
    'nuxt-webfontloader',
    '@nuxtjs/sitemap',
    '@nuxtjs/google-analytics'
  ],

  env: {
    VUE_APP_GOOGLE_MAPS_API_KEY: process.env.VUE_APP_GOOGLE_MAPS_API_KEY
  },
  googleAnalytics: {
    id: 'UA-167593799-1'
  },
  gtm: {
    id: 'GTM-W5FKBTX'
  },
  sitemap: {
    hostname: 'https://www.mekkaniko.com'
  },
  /*
   ** Router configuration
   */
  optimizedImages: {
    optimizeImages: true,
    // optimizeImagesInDev: true
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  auth: {
    redirect: {
      home: '/',
      logout: '/',
      login: '/',
      callback: '/'
    },
    watchLoggedIn: true,
    refresh_token: {
      prefix: '_refresh_token.'
    },
    token: {
      prefix: '_token.'
    },
    localStorage: true,
    cookie: {
      prefix: 'auth.',
      options: {
        path: '/',
        expires: 5
        // domain: '',
        // secure - false,
      }
    },
    strategies: {
      local: {
        endpoints: {
          login: {
            url: '/login',
            method: 'post',
            propertyName: 'accessToken'
          },
          user: {
            url: '/details',
            method: 'get',
            propertyName: 'data'
          },
          logout: {
            url: '/logout',
            method: 'get'
          }
        },
        tokenRequired: true,
        tokenType: 'Bearer'
      }
    }
  },

  axios: {
    baseURL: 'https://api.mekkaniko.com/api'
  },
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],

    defaultAssets: {
      font: false,
      icons: 'mdi'
    },
    treeShake: true,
    theme: {
      dark: false,
      themes: {
        light: {
          primary: colors.indigo.darken1,
          accent: colors.grey.darken3,
          secondary: colors.indigo.accent3,
          info: colors.indigo.darken3,
          warning: colors.red.accent2,
          error: colors.deepOrange.accent4,
          success: colors.green.darken3
        },
        dark: {
          primary: colors.indigo.lighten1,
          accent: colors.grey.darken3,
          secondary: colors.indigo.accent1,
          info: colors.indigo.darken3,
          warning: colors.red.accent2,
          error: colors.deepOrange.accent3,
          success: colors.green.lighten1
        }
      }
    }
  },

  //router config

  /*
   ** Build configuration
   */
  build: {
    transpile: [
      "vee-validate/dist/rules"
    ],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      transpile: [/^vue2-google-maps($|\/)/]
    }
  }
}
