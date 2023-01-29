/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: "#f3b218",
        red: "#f02d34",
        lightCyan: "#324d67"
      },
    },
  },
  plugins: [],
};
