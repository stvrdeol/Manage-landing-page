const { url } = require("inspector");
const colors = require("tailwindcss/colors");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        desktop: "url(bg-simplify-section-desktop.svg)",
        mobile: "url(bg-simplify-section-mobile.svg)",
      },
    },
    colors: {
      BrightRed: "hsl(12, 88%, 59%)",
      DarkGrayishBlue: "hsl(227, 12%, 61%)",
      VeryDarkBlue: "hsl(233, 12%, 13%)",
      VeryPaleRed: "hsl(13, 100%, 96%)",
      VaryLightGray: "hsl(0, 0%, 98%)",
      DarkBlue: "hsl(228, 39%, 23%)",
    },
  },
  plugins: [],
};
