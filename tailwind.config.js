/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        proxima: ["Proxima Nova Rg", "sans-serif"],
        amerigo: ["Amerigo BT", "sans-serif"],
      },
    },
  },
  plugins: [],
};
