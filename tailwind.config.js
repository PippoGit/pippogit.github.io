/** @type {import('tailwindcss').Config} */
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
        "pizza-transparent-green": "#E8FCEA",
      },
      fontFamily: {
        mono: ["Fira Code", "mono"],
      },
    },
  },
  plugins: [],
};