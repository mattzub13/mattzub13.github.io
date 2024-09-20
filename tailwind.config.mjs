/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        nimbus: ["Nimbus", "sans-serif"],
        rollestone: ["Rollestone", "sans-serif"],
      },
      colors: {
        floral_white: {
          DEFAULT: "#fffbf5",
          100: "#643c00",
          200: "#c87800",
          300: "#ffab2d",
          400: "#ffd391",
          500: "#fffbf5",
          600: "#fffcf7",
          700: "#fffdf9",
          800: "#fffdfb",
          900: "#fffefd",
        },
        linen: {
          DEFAULT: "#eee6df",
          100: "#3c2d20",
          200: "#785a3f",
          300: "#ae8765",
          400: "#ceb6a1",
          500: "#eee6df",
          600: "#f1eae4",
          700: "#f4efeb",
          800: "#f8f5f2",
          900: "#fbfaf8",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
