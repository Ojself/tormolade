module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 25s linear infinite",
        "spin-quick": "spin 1s linear infinite",
      },
    },
  },
  plugins: [],
};
