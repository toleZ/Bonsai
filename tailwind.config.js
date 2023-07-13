/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        proxima: ["Proxima Nova Rg", "sans-serif"],
        amerigo: ["Amerigo BT", "sans-serif"],
      },
      colors: {
        bonsai: {
          "#00b289": "#00b289",
          "#4c4d5f": "#4c4d5f",
          "#fff": "#fff",
          "#f8db62": "#f8db62",
        },
      },
    },
  },
  plugins: [],
};
