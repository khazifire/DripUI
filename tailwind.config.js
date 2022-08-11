/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend:{
      colors: {
        'drip':{
          'black':'#222831',
          'gray': {
            'light':'#EEEEEE',
            'dark':'#393E46'
          },
          'yellow': '#f8c238',
          'white': '#FAFAFA',
        },
        transparent: 'transparent',
        current: 'currentColor',
      },
    },
    fontFamily: {
      Inter :['Inter', 'sans-serif'],
      Cursive: ['Caveat', 'cursive'],
      CursiveBrush: ['Caveat Brush', 'cursive'],
    },
  },
  plugins: [],
}