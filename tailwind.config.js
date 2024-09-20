/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Adjust this for TypeScript if needed
  ],
  plugins: [require("tailwind-scrollbar-hide")],

  theme: {
    extend: {
      colors: {
        neonGreen: "#B9FF66",
        darkGray: "#191A23",
        lightGray: "#F3F3F3",
      },
      filter: {
        "custom-img-bg": "sepia(1) hue-rotate(50deg) saturate(5)",
      },
      fontFamily: {
        spaceGrotesk: ['"Space Grotesk"', "sans-serif"],
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc(-250px * 12))" },
        },
      },
      animation: {
        scroll: "scroll 50s linear infinite",
      },
      width: {
        "slide-track": "calc(250px * 24)",
      },
      screens: {
        "3xl": "1800px",
      },
    },
  },
  plugins: [],
};
