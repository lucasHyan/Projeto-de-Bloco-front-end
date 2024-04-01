/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-color": "#FF9966",
        "dark-color": "#CC7A52", 
      },
      boxShadow: {
        custom:
          "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)",
      },
      fontFamily: {
        'roboto': ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
      screens: {
        'Small-At': '961px',
      },
    },
  },
};