/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#05070a",
        panel: "#0b1118",
        line: "rgba(255,255,255,0.12)",
        cyan: "#5ee7ff",
        signal: "#9bffb8",
        amber: "#ffd166",
        magenta: "#ff6ad5",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "Segoe UI", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 44px rgba(94, 231, 255, 0.18)",
      },
    },
  },
  plugins: [],
};
