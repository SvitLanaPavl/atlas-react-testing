/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        customPurple: {
          50: '#F4EBFF',
          100: '#D6BBFB',
          200: '#9E77ED',
          300: '#7F56D9',
          400: '#6941C6',
          500: '#53389E',
          600: '#42307D',
          700: '#261747',
        }
      }
    },
  },
  plugins: [],
}
