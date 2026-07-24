/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#101014",
        surface: "#17171C",
        surface2: "#1D1D23",
        stitch: "#2B2B31",
        paper: "#F2EFEA",
        muted: "#8F8A82",
        thread: "#C1442D",
        teal: "#4FA8A0",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-plex-mono)", "monospace"],
      },
      backgroundImage: {
        "stitch-line":
          "repeating-linear-gradient(90deg, #2B2B31 0, #2B2B31 6px, transparent 6px, transparent 12px)",
      },
    },
  },
  plugins: [],
};
