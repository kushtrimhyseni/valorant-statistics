module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      white: {
        900: "#FFFFFF",
        700: "#F6F6FB",
        500: "#F1F2F9",
        300: "#EAEBF5",
        200: "#b3bbc3",
        100: "#E3E6EF",
      },
      black: {
        900: "#17182F",
        700: "#39394F",
        500: "#6E6E84",
        300: "#AAAABA",
        100: "#CED0DD",
        120: "#354A60",
        200: "#13141c",
        130: "#6e6e84",
      },
      brandblack: {
        900: "#000000",
        700: "#141414",
        500: "#292929",
        300: "#3D3D3D",
        100: "#525252",
      },
      yellow: {
        900: "#FFDB20",
        700: "#FFE871",
        500: "#FFF0A3",
        300: "#FBF4D3",
        100: "#F9F6E7",
      },
      orange: {
        900: "#FF8F2F",
        600: "#ff8f2f",
        700: "#FFBC64",
        500: "#FFD59F",
        300: "#FFE4CF",
        100: "#FFF2E7",
      },
      green: {
        900: "#5CE482",
        700: "#B7F0C7",
        500: "#DFF5E5",
        300: "#EBFAEF",
        200: "#4eaf0a",
        100: "#F2FAF4",
        120: "#EBFAEF",
      },
      red: {
        900: "#F2281D",
        700: "#FF6860",
        500: "#FF9893",
        300: "#FFCDCB",
        100: "#FFF5F5",
      },
      mint: {
        900: "#80E2CB",
        700: "#B6F8E8",
        500: "#D5FCF3",
        300: "#EAFFFA",
        200: "#cdeaff",
        100: "#F3FFFC",
      },
      blue: {
        900: "#165AF8",
        700: "#4D80F7",
        600: "#6366f1",
        500: "#00554d",
        400: "#4664e5",
        300: "#CFDEFF",
        200: "#331a9c",
        100: "#040b14",
      },
      purple: {
        900: "#5545A9",
        700: "#7868CA",
        500: "#A699EB",
        300: "#D1C8FF",
        200: "#52222f",
        100: "#F0EDFF",
      },
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundImage: {
        "split-black-darkblue":
          "linear-gradient(95deg,#17182F -36.26%,#616289 135.23%);",
        "team-a": "linear-gradient(90deg, #0054d4d ,transparent 40%);",
        "hero-pattern":
          "linear-gradient(to right bottom, rgba('#7ed56f',0.8), rgba('#28b485',0.8))",
      },
      boxShadow: {
        custom: "0 1px 8px 0 rgb(0 0 0 / 10%)",
        reflection: "16px 16px 0px rgba(0, 0, 0, 0.15)",
        "toplist-sh": "0px 0px 10px -4px #000",
        "toplist-wrapper": "0 2px 6px 0 rgb(2 29 56 / 15%)",
        "streaming-cta-hover": "0 2px 0 #0a4e3a;",
        "streaming-cta": "0 5px 0 #0a4e3a;",
        trending:
          "0 10px 15px -3px rgba(0,0,0,0.1),0 4px 6px -2px rgba(0,0,0,0.05)",
      },
      borderRadius: {
        "1/2": "50%",
        100: "100px",
      },
      flex: {
        2: "2 2 0%",
      },
      gridTemplateColumns: {
        "2-3": "2fr 3fr",
        "1-2": "1fr 2fr",
      },
      fontFamily: {
        rajdhani: ["Rajdhani", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
