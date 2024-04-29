/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary": "#8b58a7",
        "secondary": "#3b274c",
        "highlight": "#afd63b",
      },
      boxShadow: {
        custom:
          "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)",
      },
      fontFamily: {
        'roboto': ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
      screens: {
        'Medium-At': '961px',
        'Small-At': '601px',
      },
    },
  },
};