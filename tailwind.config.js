/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
  ],
  screens: {
    sm: "480px",
    md: "768px",
    lg: "976px",
    xl: "1440px",
  },
  safelist: [
    {
      pattern: /w-[0-9]/,
    },
    {
      pattern: /h-[0-9]/,
    },
  ],
  theme: {
    extend: {
      fontFamily: {
        sora: ["Sora", "san-serif"],
        madi: ["Ms Madi", "san-serif"],
      },
      colors: {
        primary: {
          50: "#fdf2e8",
          100: "#f9d8b9",
          200: "#f4be8a",
          300: "#f0a45b",
          400: "#ed9139",
          500: "#d27113",
          600: "#a4580f",
        },
        dull: "#B1BDCE",
      },
    },
  },
  plugins: [],
};
