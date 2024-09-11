import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      fontFamily: {
        serif: ["var(--font-nunito)"],
      },
      colors: {
        bankGradient: "#0179FE",
        Tomato: "#FF6347",
        SteelBlue: "#4682B4",
        LimeGreen: "#32CD32",
        Gold: "#FFD700",
        MediumPurple: "#9370DB",
        Teal: "#008080",
        SaddleBrown: "#8B4513",
        RoyalBlue: "#4169E1",
        LightSalmon: "#FFA07A",
        DarkOliveGreen: "#556B2F",
        Purple: "#800080",
        LightSeaGreen: "#20B2AA",
        HotPink: "#FF69B4",
        Navy: "#000080",
        "celtic-green": "#006400",
        "red-dark": " #8B0000",
        "light-blue": "#8661a6",
        "deep-purple": "#6610f2",
        "contrast-text": "#FFD700",
        "warm-coral": "#ff6f61",
        "soothing-aqua": "#5f9ea0",
        primary: {
          500: "#FF7000",
          100: "#FFF1E6",
        },
        dark: {
          100: "#000000",
          200: "#0F1117",
          300: "#151821",
          400: "#212734",
          500: "#101012",
          600: "#76828D",
          700: "#ABB8C4",
        },
        light: {
          900: "#FFFFFF",
          800: "#F4F6F8",
          850: "#FDFDFD",
          700: "#DCE3F1",
          500: "#7B8EC8",
          400: "#858EAD",
        },
        "sky-blue": "#1DA1F2",
      },
      screens: {
        xs: "420px",
        "2xl": "2000px",
      },
    },
  },
  plugins: [],
};
export default config;
