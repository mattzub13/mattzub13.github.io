/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Raleway", "sans-serif"],
        display: ["Boldonse", "serif"],
      },
      colors: {
        neutral: {
          light: "#F5F5F5",
          dark: "#4F4F4F",
          gray: "#CACCCF",
          silver: "#BFBFBF",
        },
        background: "#F5F5F5",
        font: "#4F4F4F",
        primary: {
          DEFAULT: "#004743",
        },
        secondary: {
          DEFAULT: "#fafafa",
        },
        accent: {
          DEFAULT: "#f2c94c",
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-animated"),
    require("@tailwindcss/typography"),
  ],
};
