import colors from 'vuetify/es5/util/colors'

export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      {
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
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
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
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['@/plugins/google-maps'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxtjs/vuetify', '@nuxtjs/global-components'],
  webfontloader: {
    google: {
      families: ['Montserrat:300,400,500,600,700&display=swap'] //Loads Lato font with weights 400 and 700
    }
  },
  globalComponents: {
    /* module options */
    dir: ['components', 'layouts']
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
    '@nuxtjs/toast'
  ],

  env: {
    VUE_APP_GOOGLE_MAPS_API_KEY: process.env.VUE_APP_GOOGLE_MAPS_API_KEY
  },

  toast: {
    position: 'top-center',
    register: [
      // Register custom toasts
      {
        name: 'my-error',
        message: 'Oops...Something went wrong',
        options: {
          type: 'error'
        }
      }
    ]
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
      dark: true,
      themes: {
        light: {
          primary: colors.indigo.lighten1,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.indigo.darken3,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.darken3
        },
        dark: {
          primary: colors.indigo.lighten1,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.indigo.darken3,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.darken3
        }
      }
    }
  },

  //router config

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      transpile: [/^vue2-google-maps($|\/)/]
    }
  }
}
