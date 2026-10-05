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
        ink: "rgb(var(--color-ink) / <alpha-value>)",
        paper: "rgb(var(--color-paper) / <alpha-value>)",
        mist: "rgb(var(--color-mist) / <alpha-value>)",
        clay: "rgb(var(--color-clay) / <alpha-value>)",
        moss: "rgb(var(--color-moss) / <alpha-value>)",
        dusk: "rgb(var(--color-dusk) / <alpha-value>)",
        bubblegum: "rgb(var(--color-bubblegum) / <alpha-value>)",
        mint: "rgb(var(--color-mint) / <alpha-value>)",
        bookingBlue: "rgb(var(--color-booking-blue) / <alpha-value>)",
        titleBlue: "rgb(var(--color-title-blue) / <alpha-value>)",
        ember: "rgb(var(--color-ember) / <alpha-value>)",
        sunYellow: "rgb(var(--color-sun-yellow) / <alpha-value>)",
        plum: "rgb(var(--color-plum) / <alpha-value>)",
        blush: "rgb(var(--color-blush) / <alpha-value>)"
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
