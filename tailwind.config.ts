import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#eef2f8",
          100: "#d7e0ee",
          200: "#aec0dd",
          300: "#84a0cb",
          400: "#4f6ea8",
          500: "#2a477f",
          600: "#1c3564",
          700: "#142850",
          800: "#0d1c3a",
          900: "#081228",
          950: "#040a18",
        },
        electric: {
          50: "#e8f6ff",
          100: "#c9ecff",
          200: "#94d9ff",
          300: "#5fc5ff",
          400: "#2eaeff",
          500: "#0090ff",
          600: "#0072d6",
          700: "#0058a6",
          800: "#004178",
          900: "#032c50",
        },
        steel: {
          50: "#f6f7f9",
          100: "#eceef2",
          200: "#d7dce3",
          300: "#b6bfcc",
          400: "#8f9bab",
          500: "#6e7c8f",
          600: "#586376",
          700: "#48505f",
          800: "#3d4450",
          900: "#363c46",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgba(148,217,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,217,255,0.08) 1px, transparent 1px)",
        "hero-radial":
          "radial-gradient(60% 60% at 80% 20%, rgba(0,144,255,0.25) 0%, rgba(0,144,255,0) 70%)",
        "navy-gradient": "linear-gradient(135deg, #081228 0%, #142850 55%, #0072d6 130%)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
      boxShadow: {
        card: "0 8px 30px -12px rgba(8, 18, 40, 0.25)",
        "card-hover": "0 20px 45px -15px rgba(0, 114, 214, 0.35)",
        glow: "0 0 0 1px rgba(0,144,255,0.15), 0 0 40px rgba(0,144,255,0.15)",
      },
      borderRadius: {
        xl2: "1.25rem",
        "3xl": "1.75rem",
      },
      animation: {
        "spin-slow": "spin 18s linear infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
