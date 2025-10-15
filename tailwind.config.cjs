/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // inclut tous tes fichiers React
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1D4ED8",
        secondary: "#3B82F6",
        accent: "#F59E0B",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],theme: {
  extend: {
    colors: {
      primary: "#1D4ED8",   // bleu principal
      secondary: "#3B82F6", // bleu clair
      accent: "#F59E0B",    // orange
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
  },
},

}
