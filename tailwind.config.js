const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {},
    colors: {
      ...colors,
    
      background: colors.gray[50],
    
      accentBackground: colors.gray[100], 
    
      header: colors.gray[900],
    
      highlight: colors.blue[600],
    
      highlightHeader: colors.blue[700],
    
      offset: colors.blue[500],

      link: colors.blue[500],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
