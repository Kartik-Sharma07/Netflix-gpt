/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      zIndex: {
        '-1': '-1',
      },
      scale: {
        '200': '2',
      },
      height: {
        '200': '50rem'
      }
    },
  },
  plugins: [],
}
