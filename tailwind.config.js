const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: 'media', // or remove it if not needed
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        blue: {
          DEFAULT: "#5271ff",
        },
        gray: {
          light: "#F3F4F6",
          dark: "#1F2937",
        },
      },
      screens: {
        print: { raw: "print" },
        // => @media  print { ... }
      },
    },
  },
  variants: {
    extend: {
      outline: ['active'],
    },
  },
  plugins: [],
};