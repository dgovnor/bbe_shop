module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        flame: '#FF0000',
        seaGreen: '#06AB0D',
        grey: '#5A7889'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
