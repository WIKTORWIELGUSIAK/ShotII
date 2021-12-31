module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      inset: {
        "98vh": "95vh",
      },
    },
    screens: {
      mobileS: "320px",
      // => @media (min-width: 640px) { ... }

      mobileM: "375px",
      // => @media (min-width: 768px) { ... }
      mobileL: "425px",
      // => @media (min-width: 768px) { ... }

      tablet: "768px",
      // => @media (min-width: 1024px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1280px) { ... }
      laptopL: "1440px",
      // => @media (min-width: 1280px) { ... }

      "4K": "2560px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
