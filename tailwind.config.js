const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
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
      background: colors.sky[900],
      header: colors.sky[200],
      link: colors.sky[500],
      highlight: colors.blue[200],
      highlightHeader: colors.gray[900],
      offset: colors.sky[600],
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
