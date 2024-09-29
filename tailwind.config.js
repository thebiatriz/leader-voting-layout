/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'playwrite': ['Playwrite_DE_Grund', 'sans-serif']
      }
    },
  },
  plugins: [],
}

