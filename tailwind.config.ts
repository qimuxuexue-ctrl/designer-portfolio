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
        paper: "#f7f4ee",
        mist: "#dfded6",
        clay: "#a95f3f",
        moss: "#4d5a43",
        dusk: "#313c55"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Arial", "sans-serif"],
        serif: ["Georgia", "serif"]
      }
    }
  },
  plugins: []
};

export default config;
