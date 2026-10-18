/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        elan: {
          ivory: '#F7F3EC',
          cream: '#EEE6D8',
          ink: '#24211F',
          wine: '#761D2D',
          wineDark: '#591522',
          gold: '#BDA57A',
          mist: '#D8D0C5',
        },
      },
      fontFamily: {
        sans: ['Manrope', 'PingFang SC', 'Microsoft YaHei', 'sans-serif'],
        serif: ['Cormorant Garamond', 'Noto Serif SC', 'serif'],
      },
    },
  },
  plugins: [],
};
