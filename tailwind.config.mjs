/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Raleway", "sans-serif"],
        display: ["Boldonse", "serif"],
      },
      backgroundImage: {
        dotted: "radial-gradient(circle, #3b82f6 1px, transparent 1px)",
      },
      colors: {
        primary: {
          DEFAULT: "#004743",
          100: "#000e0e",
          200: "#001d1b",
          300: "#002b29",
          400: "#003936",
          500: "#004743",
          600: "#009f97",
          700: "#00f7ea",
          800: "#50fff6",
          900: "#a7fffb",
        },
        secondary: {
          DEFAULT: "#fafafa",
          100: "#323232",
          200: "#646464",
          300: "#969696",
          400: "#c8c8c8",
          500: "#fafafa",
          600: "#fbfbfb",
          700: "#fcfcfc",
          800: "#fdfdfd",
          900: "#fefefe",
        },
        accent: {
          DEFAULT: "#f2c94c",
          100: "#3b2d04",
          200: "#765a09",
          300: "#b0880d",
          400: "#ebb512",
          500: "#f2c94c",
          600: "#f4d36f",
          700: "#f7de93",
          800: "#fae9b7",
          900: "#fcf4db",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
