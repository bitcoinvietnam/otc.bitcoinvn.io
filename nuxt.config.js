export default {
  env: {
    FORMSPREE_LINK: process.env.FORMSPREE_LINK
  },

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'BitcoinVN OTC Trading',
    htmlAttrs: {
      lang: 'en'
    },
    __dangerouslyDisableSanitizers: ['script'],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'BitcoinVN OTC Trading Service' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: 'https://www.googletagmanager.com/gtag/js?id=G-8PYNETYLPH', async: true },
      {
        innerHTML: `window.dataLayer = window.dataLayer || [];
                  function gtag(){ dataLayer.push(arguments); };
                  gtag('js', new Date());
                  gtag('config', 'G-8PYNETYLPH');`,
        type: 'text/javascript',
        charset: 'utf-8'
      },
      { src: 'https://www.google.com/recaptcha/api.js?render=6LeYAy0pAAAAAOSFlR_Uyq975H3-Fhhzeo01gRaR' }, {
        innerHTML: ` grecaptcha.ready(function () {
          grecaptcha.execute('6LeYAy0pAAAAAOSFlR_Uyq975H3-Fhhzeo01gRaR', {action: 'submit'}).then(function (token) {
              document.getElementById('g-recaptcha-response').value = token;
          });
      });`,
        type: 'text/javascript',
        charset: 'utf-8'
      },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  }
}
