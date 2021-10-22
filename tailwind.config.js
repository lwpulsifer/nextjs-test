const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {},
    colors: {
      ...colors,
      background: '#FFB700',
      header: colors.gray[900],
      link: colors.gray[700],
      highlight: '#f5f9ff',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
