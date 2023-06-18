/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      backgroundImage: {
        home: "url('/images/bg5.jpg')",
      },
      background: {
        navigation: "#008fff",
      },
      fontFamily: {
        font1: ["Font1"],
      },
    },
  },
  variants: {},
  plugins: [require("tailwindcss"), require("autoprefixer")],
};