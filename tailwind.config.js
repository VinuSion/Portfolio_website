/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#051614",
        secondary: "#a4c1c0",
        tertiary: "#0f302c",
        "black-100": "#0d2624",
        "black-200": "#031c26",
        "white-100": "#f3f3f3",
        "black-rgba": 'rgba(0, 0, 0, 0.6)',
      },
      boxShadow: {
        card: "0px 35px 120px -15px #1e3135",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
      backgroundSize: {
        'size-200': '200% 200%',
      },
      backgroundPosition: {
        'pos-0': '0% 0%',
        'pos-100': '100% 100%',
      },
    },
  },
  plugins: [],
};