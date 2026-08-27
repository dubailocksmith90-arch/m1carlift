import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "#0A0A0B",
        surface: "#151517",
        "surface-2": "#1E1E21",
        "surface-3": "#27272B",
        gold: "#C9A227",
        "gold-light": "#E8C04A",
        "gold-dark": "#A07B18",
        "off-white": "#EDEDED",
        muted: "#8A8A95",
        border: "#2A2A2E",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "hero-glow": "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(201,162,39,0.15), transparent)",
        "gold-gradient": "linear-gradient(135deg, #C9A227 0%, #E8C04A 50%, #C9A227 100%)",
        "card-gradient": "linear-gradient(145deg, rgba(30,30,33,0.8) 0%, rgba(21,21,23,0.9) 100%)",
      },
      boxShadow: {
        "gold-glow": "0 0 30px rgba(201,162,39,0.2)",
        "gold-glow-sm": "0 0 15px rgba(201,162,39,0.15)",
        "card": "0 4px 24px rgba(0,0,0,0.4)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "pulse-gold": "pulseGold 2s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseGold: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(201,162,39,0.4)" },
          "50%": { boxShadow: "0 0 0 8px rgba(201,162,39,0)" },
        },
      },
      borderRadius: {
        "xl": "12px",
        "2xl": "16px",
        "3xl": "24px",
      },
    },
  },
  plugins: [],
};

export default config;
