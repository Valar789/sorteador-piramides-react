/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
 
  ],
  theme: {
    extend: {
      colors: {
        bluePrimary: '#293654', 
        blueSecondary: '#6C82BB',
        greenPrimary: "#58AA56",
        redPrimary : "#DD451D",
      },
    },
    

  },
  plugins: [ ],
}