/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#030014",
        accent: "#AB8BFF",
        secondary: "#151312",

        light: {
          100: "#D6C7FF",
          200: "#A8B5DB",
          300: "#9CA4AB"
        },
        dark: {
          100: "#1B1D28",
          200: "#151312",
          300: "#030014"
        },
      }
    },
  },
  plugins: [],
}