/** @type {import('tailwindcss').Config} */
const { url } = require("inspector");
const twColors = require("tailwindcss/colors");

module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {},
      colors: {
        "pizza-green": "#0F7118",
        "pizza-dark-green": "#0B5613",
        "pizza-light-green": "#5EA165",
        "pizza-lightest-green": "#7EB484",
        "pizza-bright-green": "#13901F",
        "pizza-red": "#A91919",
        "pizza-lightest-red": "#F2A6A6",
        "pizza-transparent-green": "#E8FCEA",
        "pizza-box-white": "#F7F2ED",
        "pizza-box-grey": "#919085",
      },
      fontFamily: {
        mono: ["Fira Code", "mono"],
      },

      backgroundImage: {
        "pizza-pattern": "url('/pizza-pattern.jpg')",
      },
    },
  },
  plugins: [],
};
