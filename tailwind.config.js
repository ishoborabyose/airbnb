/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      boxShadow: {
        "shadow-nav": "0px 2.98256px 7.4564px rgba(0, 0, 0, 0.1);",
      },
      colors: {
        "dark-gray": "#918e9b",
      },
    },
  },
  plugins: [],
};
