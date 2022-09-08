/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    screens: {
      xs: "600px",
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        "sk-blue-100": "#00004d",
        "sk-blue-200": "#002366",
        "sk-blue-300": "#192bc2",
        "sk-blue-400": "#0000ff",
        "sk-blue-500": "#1560BD",
        "sk-blue-600": "#73c2fb",
        "sk-blue-700": "#1E90FF",
        "sk-blue-800": "#87ceeb",
        "dark-100": "#16151d",
        "dark-200": "#0b0a0d",
      },
      flex: {
        "25%": "0 0 25%",
        "75%": "0 0 75%",
        "full": "0 0 100%",
        2: "0 0 66.6666%",
        3: "0 0 33.3333%",
      },
    },
  },
  plugins: [],
};
