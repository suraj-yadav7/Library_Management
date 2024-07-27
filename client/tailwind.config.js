/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      transparent: 'transparent',
      current: 'currentColor',
      iris:'#5A54C4',
      slateBlue:'#7672CB',
      tropicalIndigo:'#928FD2',
      perlWinkle:'#AEACD9',
      lavenderWeb:'#CAC9DF',
      red:colors.red,
      indigo:colors.indigo,
      purple:colors.purple,
      white:colors.white
    }
  },
  plugins: [],
}

