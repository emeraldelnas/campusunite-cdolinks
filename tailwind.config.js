/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts,scss}"
  ],
  theme: {
    extend: {
      fontFamily: {
        pixel: ['Silkscreen', 'sans-serif'],
      }
    }
  },
  plugins: [],
}
