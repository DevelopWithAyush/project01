import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        colorCode1: "#FEECFF",
        colorCode2: "#FECAFF",
        colorCode3: "#FEB5FF",
        colorCode4: "#FFDBE7",
        colorCode5: "#FFF4D6",
        colorCode6: "#F3FCD7",
        colorCode7: "#D2F5EE",
        colorCode8: "#C3EFFF",
        white: "#FFF",
        black: "#030303",
        purple: "#4D209D",
      },
      fontFamily: {
        "dm-sans-thin_100": ["DMSans-Thin", "sans-serif"],
        "dm-sans-thin-italic_100": ["DMSans-ThinItalic", "sans-serif"],
        "dm-sans-light_300": ["DMSans-Light", "sans-serif"],
        "dm-sans-light-italic_300": ["DMSans-LightItalic", "sans-serif"],
        "dm-sans-regular_400": ["DMSans-Regular", "sans-serif"],
        "dm-sans-italic_400": ["DMSans-Italic", "sans-serif"],
        "dm-sans-medium_500": ["DMSans-Medium", "sans-serif"],
        "dm-sans-medium-italic_500": ["DMSans-MediumItalic", "sans-serif"],
        "dm-sans-semi-bold_600": ["DMSans-SemiBold", "sans-serif"],
        "dm-sans-semi-bold-italic_600": ["DMSans-SemiBoldItalic", "sans-serif"],
        "dm-sans-bold_700": ["DMSans-Bold", "sans-serif"],
        "dm-sans-bold-italic_700": ["DMSans-BoldItalic", "sans-serif"],
        "dm-sans-extra-bold_800": ["DMSans-ExtraBold", "sans-serif"],
        "dm-sans-extra-bold-italic_800": [
          "DMSans-ExtraBoldItalic",
          "sans-serif",
        ],
        "dm-sans-black_900": ["DMSans-Black", "sans-serif"],
        "dm-sans-black-italic_900": ["DMSans-BlackItalic", "sans-serif"],
      },
      animation: {
        marquee: "marquee var(--duration) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap)))" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
