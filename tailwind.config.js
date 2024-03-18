/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        custom: "0 0px 10px 0 rgba(0,0,0,0.10), 0 0px 10px 0 rgba(0,0,0,0.08)",
      },
    },
  },
  plugins: [],
};
