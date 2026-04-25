import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        syne: ["var(--font-syne)", "sans-serif"],
        sans: ["var(--font-dm-sans)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      colors: {
        surface: {
          primary: "var(--surface-primary)",
          secondary: "var(--surface-secondary)",
          elevated: "var(--surface-elevated)",
        },
        border: {
          default: "var(--border-default)",
          emphasis: "var(--border-emphasis)",
        },
        signal: {
          red: {
            text: "var(--signal-red-text)",
            bg: "var(--signal-red-bg)",
            border: "var(--signal-red-border)",
          },
          amber: {
            text: "var(--signal-amber-text)",
            bg: "var(--signal-amber-bg)",
            border: "var(--signal-amber-border)",
          },
          green: {
            text: "var(--signal-green-text)",
            bg: "var(--signal-green-bg)",
            border: "var(--signal-green-border)",
          },
          blue: {
            text: "var(--signal-blue-text)",
            bg: "var(--signal-blue-bg)",
            border: "var(--signal-blue-border)",
          },
          teal: {
            text: "var(--signal-teal-text)",
            bg: "var(--signal-teal-bg)",
            border: "var(--signal-teal-border)",
          },
        },
      },
      borderRadius: {
        chip: "6px",
        badge: "6px",
        card: "10px",
        panel: "16px",
        modal: "24px",
      },
    },
  },
  plugins: [],
};
export default config;
