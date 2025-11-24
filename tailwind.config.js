/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0f172a', // Dark blue/slate
        secondary: '#1e293b', // Lighter blue/slate
        accent: '#38bdf8', // Light blue
      },
    },
  },
  plugins: [],
}
