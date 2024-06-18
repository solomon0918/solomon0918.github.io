/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin")

module.exports = {
  prefix: "tw-",
  darkMode: "selector",
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        md: "4rem",
        lg: "6rem",
      },
    },
    extend: {
      colors: {
        primary_dark: "#003135",
        primary: "#024950",
        accent: "#964734",
        secondary: "#0FA4AF",
        secondary_light: "#AFDDE5",
      },
      textShadow: {
        default: "2px 2px 4px rgba(0, 0, 0, 0.1)",
        md: "3px 3px 6px rgba(0, 0, 0, 0.15)",
        lg: "4px 4px 8px rgba(0, 0, 0, 0.2)",
      },
      fontFamily: {
        sans: ["Outfit", "sans-serif"],
      },
      fontSize: {
        sm: ["clamp(0.7813rem, 0.7747rem + 0.0326vi, 0.8rem)", "1.4"],
        base: ["clamp(0.9375rem, 0.9158rem + 0.1087vi, 1rem)", "1.5"],
        lg: ["clamp(1.125rem, 1.0815rem + 0.2174vi, 1.25rem)", "1.4"],
        xl: ["clamp(1.35rem, 1.2761rem + 0.3696vi, 1.5625rem)", "1.4"],
        "2xl": ["clamp(1.62rem, 1.5041rem + 0.5793vi, 1.9531rem)", "1.2"],
        "3xl": ["clamp(1.944rem, 1.771rem + 0.8651vi, 2.4414rem)", "1.1"],
        "4xl": ["clamp(2.3328rem, 2.0827rem + 1.2504vi, 3.0518rem)", "1"],
        "5xl": ["clamp(2.7994rem, 2.4462rem + 1.7658vi, 3.8147rem)", "1"],
      },
    },
  },
  plugins: [
    plugin(({ addUtilities, theme }) => {
      addUtilities({
        ".fade-up": {
          transition:
            "transform 1s cubic-bezier(0.64, 0.04, 0.26, 0.87), opacity 0.8s cubic-bezier(0.64, 0.04, 0.26, 0.87)",
          opacity: theme("opacity.0"),
          transform: "translate3d(0, 2rem, 0)",
        },
        ".faded": {
          opacity: theme("opacity.100"),
          transform: "translate3d(0, 0, 0)",
        },
      })
    }),
  ],
}
