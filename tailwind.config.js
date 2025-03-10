/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './app/**/*.{js,ts,jsx,tsx}', // If you're using the "app" directory
      './pages/**/*.{js,ts,jsx,tsx}', // If you're using the "pages" directory
      './components/**/*.{js,ts,jsx,tsx}', // If you have components
    ],
    theme: {
      extend: {},
    },
    plugins: [],
    screens: {
      'sm': '576px',
      'md': '960px',
      'lg': '1440px',
    },
  };
  