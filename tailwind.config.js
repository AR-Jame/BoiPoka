/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        workSans: "Work Sans",
        playFair: "Playfair Display",
      },
      colors:{
        primary: "#23BE0A",
        primaryHover: "#3cd924",
        secendary: "#59C6D2",
        secendaryHover: "#59c6d2c4"
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}