/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Outfit", "sans-serif"],
      },
      colors: {
        red: "#FC4747",
        dark: "#10141E",
        semi: {
          dark: "#161D2F",
        },
        blue: {
          greyish: "#5A698F",
        },
      },
    },
  },
  plugins: [
    function ({ addComponents, addBase }) {
      addBase({});
      addComponents({
        ".container": {
          "@apply max-w-[77.5rem] mx-auto px-5 md:px-10 lg:px-16 xl:max-w-[90rem]":
            {},
        },
        ".heading-xs": {
          "@apply text-lg font-medium": {},
        },
        ".heading-s": {
          "@apply text-2xl font-medium": {},
        },
        ".heading-m": {
          "@apply text-2xl font-light": {},
        },
        ".heading-l": {
          "@apply text-[2rem] font-light": {},
        },
        ".body-m": {
          "@apply text-[0.94rem] font-light": {},
        },
        ".body-s": {
          "@apply text-[0.815rem] font-light": {},
        },
      });
    },
  ],
};
