/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        active: "#FFF",
        primary: "#190422",
        secondary: "#BC8AFC"
      },
      backgroundImage: {
        'white-to-blue': 'linear-gradient(to right, #ffffff, rgba(28, 146, 255, 0.1))',
      },
    },
  },
  plugins: [],
}