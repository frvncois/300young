/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        hurmeGeometricSens2: ["var(--font-hurme-geometric-sens-2)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "24px",
          // lg: "16px",
          "2xl": "120px",
        },
        screens: {
          "2xl": "1920px",
        },
        // maxWidth: {
        //   "3xl": "1678px"
        // },
      },
      screens: {
        "2xl": "1678px",
      },
      colors: {
        black: "#000000",
        black2: "#24211E",
        primary: "#E0A94F",
        "blanc-cream": "#E8E1CF",
        blanc: "#FFFFFF",
      },
    },
  },
  plugins: [
    // function ({ addComponents }) {
    //   addComponents({
    //     ".container": {
    //       "@screen 2xl": {
    //         maxWidth: "1678px",
    //       },
    //     },
    //   });
    // },
  ],
};
