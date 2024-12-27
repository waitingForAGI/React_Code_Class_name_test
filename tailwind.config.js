module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: "var(--white)",
        dark___2: "var(--dark___2)",
        darkslategray: "var(--darkslategray)",
        orange: { a700: "var(--orange_a700)" },
        gray: { 50: "var(--gray_50)", 700: "var(--gray_700)" },
        red: { 100: "var(--red_100)" },
        blue_gray: { 100: "var(--blue_gray_100)", "100_01": "var(--blue_gray_100_01)" },
        black: { 600: "var(--black_600)", A700_01: "var(--black_A700_01)" },
        gray_shadow: "var(--gray_shadow)",
      },
      boxShadow: { xs: "0 0 13px 5px #00000029" },
      fontFamily: { manrope: "Manrope", markoone: "Marko One" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
