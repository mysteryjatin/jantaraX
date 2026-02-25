import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0070F3",
          light: "#00A3FF",
          dark: "#0051B5",
        },
        gold: {
          DEFAULT: "#C9A84C",
          light: "#F5C518",
          dark: "#9A7A2E",
        },
        silver: {
          DEFAULT: "#A8B2C1",
          light: "#D4DCE8",
          dark: "#6B7A8D",
        },
        dark: {
          DEFAULT: "#0A0E1A",
          card: "#0F1628",
          border: "#1A2540",
          surface: "#141C30",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-x-primary":
          "linear-gradient(135deg, #0070F3 0%, #00A3FF 50%, #C9A84C 100%)",
        "circuit-pattern": "url('/circuit-bg.svg')",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out infinite 2s",
        "pulse-slow": "pulse 4s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
        "gradient-shift": "gradientShift 8s ease infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "slide-in-right": "slideInRight 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "shimmer": "shimmer 2s linear infinite",
        "orbit": "orbit 15s linear infinite",
        "typing": "typing 3s steps(40) infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        glow: {
          from: { boxShadow: "0 0 20px #0070F3, 0 0 40px #0070F340" },
          to: { boxShadow: "0 0 30px #00A3FF, 0 0 60px #0070F360, 0 0 80px #0070F320" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(40px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        slideInRight: {
          from: { opacity: "0", transform: "translateX(40px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        orbit: {
          "0%": { transform: "rotate(0deg) translateX(120px) rotate(0deg)" },
          "100%": { transform: "rotate(360deg) translateX(120px) rotate(-360deg)" },
        },
        typing: {
          "0%": { width: "0" },
          "50%": { width: "100%" },
          "100%": { width: "0" },
        },
      },
      boxShadow: {
        "glow-blue": "0 0 20px rgba(0, 112, 243, 0.5)",
        "glow-gold": "0 0 20px rgba(201, 168, 76, 0.5)",
        "glow-lg": "0 0 40px rgba(0, 112, 243, 0.3), 0 0 80px rgba(0, 112, 243, 0.1)",
        "card": "0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
        "card-hover": "0 16px 48px rgba(0, 112, 243, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.08)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
