import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        color: "var(--color)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        card: "var(--card)",
        primaryA: "var(--primary-a)",
        primaryA2: "var(--primary-a2)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        sparkle: "sparkle infinite",
        alert: "alert 2s infinite linear",
        autoscrollup: "autoscrollup 30s infinite linear forwards",
        autoscrolldown: "autoscrolldown 30s infinite linear forwards",
        spotlight: "spotlight 4s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
