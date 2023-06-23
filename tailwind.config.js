/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {},
    colors: {
      primary: {
        100: '#E6F6FE',
        200: '#C0EAFC',
        300: '#9ADDFB',
        400: '#4FC3F7',
        500: '#03A9F4',
        600: '#0398DC',
        700: '#026592',
        800: '#014C6E',
        900: '#013349',
      },
      gray: {
        50: '#FEFCE8',
        100: '#f7fafc',
        200: '#edf2f7',
        300: '#e2e8f0',
        400: '#cbd5e0',
        500: '#a0aec0',
        600: '#718096',
        700: '#4a5568',
        800: '#2d3748',
        900: '#1a202c',
      },
      gold: {
        50: '#FEFCE8',
        100: '#FEF9C3',
        200: '#FEF08A',
        300: '#FDE047',
        400: '#FACC15',
        500: '#EAB308',
        600: '#CA8A04',
        700: '#A16207',
        800: '#854D0E',
        900: '#713F12',
      },
    },
    backgroundImage: {
      'main':
        'url("https://otc.bitcoinvn.io/assets/images/hero-banner.jpg")',
      'leader-avt':
        'url("https://otc.bitcoinvn.io/assets/images/leader-avt-black.jpg")',
      'supported-currencies':
        'url("https://otc.bitcoinvn.io/assets/images/supported-currencies.jpg")',
      'who-we-serve':
        'url("https://otc.bitcoinvn.io/assets/images/who-we-serve.jpg")',
    },
  },
  plugins: [],
}