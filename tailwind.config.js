/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/screencomponents/**/*.{js,jsx,ts,tsx}",
    "./src/screen/*.{js,jsx,ts,tsx}",
    "./src/screen/**/*.{js,jsx,ts,tsx}",
    "./src/screenforms/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

