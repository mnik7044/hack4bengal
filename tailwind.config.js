/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: {
          1: "#CFB9FF",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
