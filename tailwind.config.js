/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/lib/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ink: '#14213D',
        'deep-green': '#1F3D2B',
        moss: '#6F8F72',
        copper: '#B66A3C',
        cloud: '#F7F8F5',
        slate: '#334155',
        line: '#DDE3DA',
      },
      boxShadow: {
        soft: '0 18px 60px rgba(20, 33, 61, 0.12)',
      },
    },
  },
  plugins: [],
};
