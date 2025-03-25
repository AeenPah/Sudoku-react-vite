/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightBlue: "#7DD3FC",
        lighterBlue: "#e8fcff",
        mainBlue: "#005578",
        darkBlue: "#003050",
      },
    },
  },
  plugins: [],
};
