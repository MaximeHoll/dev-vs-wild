/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        kage: ["KAGE", "cursive"],
        Outfit:["Outfit",'sans-serif']
      },
    },
    colors:{
      "greenh" : "#0F9D78",
      "bleuh" : "#10768A",
      "greyh" : "#505050",
      "white" : "#FFFFFF"
    }
  },
  plugins: [],
}
