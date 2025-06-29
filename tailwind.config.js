/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Primary & Accent Colors
        primary: "#0A2342", // Navy Blue
        accent: "#FF6F00", // Industrial Orange

        // Neutrals
        light: "#F4F4F4", // Light Gray
        dark: "#333333", // Body Text
        muted: "#666666", // Muted Text
        border: "#D1D1D1", // Border Color
        disabled: "#CCCCCC", // Disabled BG

        // Utility
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
