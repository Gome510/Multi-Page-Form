/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "marine-blue": "hsl(213, 96%, 18%)",
        "purplish-blue": "hsl(243, 100%, 62%)",
      },
    },
  },
  plugins: [],
};
