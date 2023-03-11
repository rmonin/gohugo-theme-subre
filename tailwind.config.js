module.exports = {
  content: [
    "./layouts/**/*.html",
    "./content/**/*.{html,md}",
    "./themes/subre/layouts/**/*.html",
    "./themes/subre/content/**/*.{html,md}",
  ],
  theme: {
    extend: {
      spacing: {
        "4%": "4%",
      },
      typography: {
        DEFAULT: {
          css: {},
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
