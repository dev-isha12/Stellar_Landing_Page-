/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#F0EAD9",
        ink: "#07070E",
        gold: "#A8772A",
        goldLight: "#D4A94E",
        goldSoft: "#EDD88A",
        dim: "#12121F"
      },
      fontFamily: {
        serif: ["Libre Baskerville", "Georgia", "serif"],
        sans: ["Outfit", "sans-serif"],
        mono: ["Space Mono", "monospace"]
      },
      transitionTimingFunction: {
        "stellar-out": "cubic-bezier(.25,.46,.45,.94)",
        "stellar-in-out": "cubic-bezier(.76,0,.24,1)"
      },
      keyframes: {
        tickerForward: {
          to: { transform: "translateX(-100%)" }
        },
        tickerReverse: {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(0)" }
        },
        scrollPulse: {
          "0%, 100%": { opacity: ".3", transform: "scaleY(1)" },
          "50%": { opacity: "1", transform: "scaleY(1.3)" }
        }
      },
      animation: {
        "ticker-forward": "tickerForward 25s linear infinite",
        "ticker-reverse": "tickerReverse 25s linear infinite",
        "ticker-giant": "tickerForward 35s linear infinite",
        "scroll-pulse": "scrollPulse 2.4s ease-in-out infinite"
      }
    }
  },
  plugins: []
};
