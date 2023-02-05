/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      aria: {
        current: 'current="page"',
      },
    },
  },
  plugins: [],
};
