/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.jsx", "./index.html"],
  theme: {
    fontFamily: {
      primary: "Poppins",
    },
    extend: {
      colors: {
        primary: "#033FFF",
        Secondary: "#282162",
        tertiary: "#848191",
        light: "#BDBDBD",
        dark: "#000036",
      },
    },
  },
  plugins: [],
};
