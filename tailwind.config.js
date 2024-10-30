module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html'
  ],
  darkMode: 'media', // 'media' veya bu satırı tamamen kaldırabilirsin
  theme: {
    extend: {
      colors: {
        'brand-color': '#5d3ebc',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
