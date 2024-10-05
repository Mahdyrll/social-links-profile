/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      'fontFamily': {
        'Inter-Bold': './assets/fonts/static/Inter-Bold.ttf',
        'Inter-Regular': './assets/fonts/static/Inter-Regular.ttf',
        'Inter-SemiBold': './assets/fonts/static/Inter-SemiBold.ttf'
      },
    },
  },
  plugins: [],
}

