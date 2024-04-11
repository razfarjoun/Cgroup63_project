/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./App.jsx",
    "./assets/FuncComps/FCLogin.jsx",
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
}

