/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3498db", // Your main brand color
        "primary-dark": "#2980b9", // A darker shade for hover states
        "primary-light": "#e8f4fd", // A lighter shade for backgrounds
      },
    },
  },
  plugins: [],
};
