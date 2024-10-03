/* eslint-disable no-undef */
module.exports = {
  mode: "jit",
  purge: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
    "./node_modules/@material-tailwind/react/components/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,jsx,ts,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          DEFAULT: "var(--blue-light)",
          light: "var(--blue-lightest)",
          dark: "var(--blue-dark)",
          md: "var(--blue-md)",
        },
        light:{
          DEFAULT:  "var(--light)",
          md: "var(--light-md)"
        }
      },
    },
  },
  plugins: [],
};
