module.exports = {
  purge: ["./pages/**/*.tsx", "./components/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      kaushan: ["Kaushan Script"],
    },
    extend: {
      colors: {
        blue: {
          DEFAULT: "#1E3A8A",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
