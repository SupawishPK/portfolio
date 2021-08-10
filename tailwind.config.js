module.exports = {
  purge: ["./pages/**/*.tsx", "./components/**/*.tsx"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    fontFamily: {
      kaushan: ["Kaushan Script"],
    },
    boxShadow:{
      'custom-light':" 0 0 10px #313131",
      'custom-dark':"5px 5px 10px #0a0c0e, -5px -5px -10px #14161c"
    },
    extend: {
      colors: {
        blue: {
          DEFAULT: "#818CF8",
        },
        dark: {
          DEFAULT: "#010101",
          100: "#0a0b1e",
          200: "#111827",
          500: "#1F2937",
          700: "#374151",
        },
      },
    },
  },
  variants: {
    extend: {
      boxShadow:['dark']
    },
  },
  plugins: [],
};
