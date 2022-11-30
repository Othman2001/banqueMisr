/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "primary-500": "#871e35",
      },
      width: {
        "60%": "13.375rem",
        "70%": "70%",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
