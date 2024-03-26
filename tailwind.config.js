/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/components/**/*.{js,jsx}', './src/app/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        green: '#05D54B',
      },

      borderRadius: {
        card: '32px',
      },
    },
  },
  plugins: [],
};
