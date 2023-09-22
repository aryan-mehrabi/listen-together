module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#141414",
        secondary: "#E6ECEF",
        cta: "#31ABC4",
      },
      keyframes: {
        progressbar: {
          "0%": { width: "0" },
          "50%": { width: "100%" },
        },
      },
      animation: {
        progressbar: "progressbar 7.5s linear",
      },
      height: {
        screen: ["100vh /* fallback for Opera, IE and etc. */", "100dvh"],
      },
    },
  },
  plugins: [],
};
