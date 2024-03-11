/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['"Exo 2"', "sans-serif"],
      },
      colors: {
        primary: '#232323',
        accent: '#ED1B24',
      },
    },
  },
  plugins: [],
}

