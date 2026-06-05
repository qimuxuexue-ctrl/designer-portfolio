import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#171717",
        paper: "#ffffff",
        mist: "#dfded6",
        clay: "#a95f3f",
        moss: "#4d5a43",
        dusk: "#313c55",
        bubblegum: "#ef66c5",
        bookingBlue: "#547ADD",
        titleBlue: "#3C63C8",
        plum: "#92165c",
        blush: "#f2e7e8"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Arial", "sans-serif"],
        display: ["var(--font-display)", "Arial Black", "Arial", "sans-serif"],
        serif: ["Georgia", "serif"]
      }
    }
  },
  plugins: []
};

export default config;
