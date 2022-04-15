module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        hero: "47rem",
        tool: "46rem",
        "city-w": 76,
        "city-h": 84,
        "city-mobile-w": 76 * 2,
        "city-mobile-h": 84 * 2,
        "venue-w": 350,
        "venue-h": 380,
        "venue-tablet-w": 350 * 0.5,
        "venue-tablet-h": 380 * 0.5,
        "venue-mobile-w": 350 * 0.3,
        "venue-mobile-h": 380 * 0.3,
      },
      backgroundImage: {
        hero: "url('/src/assets/images/heroBackground.png')",
        tool: "url('/src/assets/images/background_img2.png')",
        vendor: "url('/src/assets/images/background_img3.png')",
      },
      transitionProperty: {
        width: "width",
      },
      borderRadius: {
        20: 20,
      },
      fontSize: {
        20: 20,
      },
      colors: {
        black: "#000000",
        white: "#ffffff",
        slate: "rgb(226 232 240)",
        dark: "#4A3939",
        maroon: "#6F3939",
        light: "#807979",
        dim: "rgb(199 199 199 / 10%)",
        helper: "#716B6B",
        "light-maroon": "#DF7E7E",
        "light-maroon-dark": "#CE6868",
        "maroon-300": "#6F393920",
      },
      fontFamily: {
        regular: ["regular"],
        light: ["light"],
        semibold: ["semibold"],
        mark: ["mark"],
        "roboto-regular": ["roboto-regular"],
        "roboto-bold": ["roboto-bold"],
      },
      maxWidth: {
        header: "23rem",
        mobile: "14rem",
      },
      lineHeight: {
        11: "58.51px",
      },
    },
    screens: {
      lg: { max: "1920px" },
      md: { max: "1200px" },
      sm: { max: "990px" },
      xs: { max: "576px" },
    },
  },

  plugins: [require("tailwindcss"), require("autoprefixer")],
};
