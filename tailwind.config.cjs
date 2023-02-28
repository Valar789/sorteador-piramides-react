/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
 
  ],
  theme: {
    extend: {},
    colors: {
      bluePrimary: '#293654', 
      blueSecondary: '#6C82BB',
      greenPrimary: "#58AA56",
      redPrimary : "#DD451D",
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      purple: '#3f3cbb',
      midnight: '#121063',
      metal: '#565584',
      tahiti: '#3ab7bf',
      silver: '#ecebff',
      bermuda: '#78dcca',
      yellow: '#FFF100',
      blue:'#0136FE',
      red:'#FF3602',
      gray:'#AEAEAE',
    },
  },
  plugins: [ ],
}