/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'banner': "url('/images/Banner.png')",
        'Brand': "url('/images/Navlogo.png')",
      },
    },
  },
  plugins: [],
}
