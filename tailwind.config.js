module.exports = {
  content: [
    "./layouts/**/*.html",
    "./content/**/*.{html,md}",
    "./themes/subre/layouts/**/*.html",
    "./themes/subre/content/**/*.{html,md}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
     require('@tailwindcss/typography'),
  ],
}
