/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#1A191D',
        'light': '#201F22',
        'outline': '#535353',
        'secondary': '#C7C7C8',
        'accent': '#00F9D6',
        'accent-secondary': '#A1AEE7'
      }
    },
  },
  plugins: [],
}

