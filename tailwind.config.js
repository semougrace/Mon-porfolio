// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark_primary: "#06223F",
        gray: "#B7C5D3",
      },
      fontFamily: {
        Poppins: ['Poppins', 'sans-serif'],
        Paprika: ['Paprika', 'cursive'],
        Inria: ['Inria Serif', 'serif'],
      },
    },
  },
  plugins: [],
};