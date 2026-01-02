/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#051516",
        secondary: "#a4c1c0",
        tertiary: "#0f302f",
        accent: "#0cd3ab",
        border: "#0fbea1",
        border2: "#3b9491",
        sea: "#1ab9bf",
        g1: "#3d827a",
        g2: "#0d3b3d",
        "black-100": "#0d2625",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #1e3135",
      },
      screens: {
        xs: "400px",
        ns: "300px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/hero-bg.png')",
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