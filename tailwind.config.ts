/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bodoni: ["Libre Bodoni", "serif"],
        Lora: ["Lora", "serif"],
      },
      colors: {
        csa: {
          "red-100": "#7C2413",
          "red-200": "#842A35",
          "green-100": "#6F77765",
          "yellow-100": "#D0AD6B",
          "yellow-200": "#E0C799",
          "yellow-300": "#E9A545",
          "tan-100": "#F9EDD7",
          "tan-200": "#CBAD95",
          "tan-300": "#AD9B85",
          "gray-100": "#535353",
          "gray-200": "#534C4A",
        },
      },
    },
  },
  plugins: [],
};
