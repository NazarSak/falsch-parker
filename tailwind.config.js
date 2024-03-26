/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/components/**/*.{js,jsx}', './src/app/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        light: '#F5F7F9',
        green: '#05D54B',
        dark: '#0D0F11',
      },
      maxWidth: {
        container: '1360px',
      },
      borderRadius: {
        card: '32px',
      },
    },
  },
  plugins: [],
};
