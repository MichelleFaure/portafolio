/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
       fontFamily: {
       display: "Inter, sans-serif",
      },
      colors: {
        secondary: "#5E62D1",
        primary: "#5FECC8",
        tertiary:"#464bd3",
      },
      keyframes: {
        wiggle: {
          "0%": { transform: "scale(0.1)" },

          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        wiggle: "wiggle 0.5s ease-out ",
      },
    },
  },
  plugins: [],
};
