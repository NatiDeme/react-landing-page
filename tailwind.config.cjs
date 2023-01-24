/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "brand-blue": "#0e1f44",
        "brand-light-blue": "#0655ff",
        "brand-yellow": "#e87206",
        "brand-orange": "#dc4200",
        "brand-neutral": "#ffffff",
      },
      fontFamily: {
        display: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
