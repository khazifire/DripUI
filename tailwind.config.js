/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        drip: {
          black: '#141b1f',
          gray: {
            light: '#EEEEEE',
            dark: '#393E46',
          },
          yellow: '#f8c238',
          white: '#ffffff',
        },
        transparent: 'transparent',
        current: 'currentColor',
      },
    },
    fontFamily: {
      Raleway: ['Raleway', 'sans-serif'],
      Cursive: ['Caveat', 'cursive'],
      CursiveBrush: ['Caveat Brush', 'cursive'],
    },
  },
  plugins: [],
};
