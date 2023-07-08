/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Lato: ["Lato", "sans-serif"],
        Alatsi: ["Alatsi", "sans-seriff"],
      },
      colors: {
        violet: {
          1: "#CFB9FF",
        },
        pink: {
          1: "#FFE6E2",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
