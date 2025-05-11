/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    {
      pattern: /(h|body|button|ui|text|subheading|table)-/,
    },
  ],
  theme: {
    extend: {},
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
    screens: {
      xxl: {
        max: "1920px",
      },
      xl: {
        max: "1255px",
      },
      lg: {
        max: "991px",
      },
      md: {
        max: "767px",
      },
      sm: {
        max: "575px",
      },
      xs: {
        max: "360px",
      },
    },
  },
  plugins: [],
};
