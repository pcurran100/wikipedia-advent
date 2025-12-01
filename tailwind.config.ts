import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        evergreen: "#0f2b24",
        spruce: "#14532d",
        holly: "#b80d34",
        gold: "#f5d38c",
        snow: "#f8fafc",
        pine: "#1c3f32",
        twilight: "#3b2a6f",
        periwinkle: "#9184ff",
      },
      fontFamily: {
        display: ['"Times New Roman"', "Georgia", '"Times"', "serif"],
        mono: ["ui-monospace", "SFMono-Regular", "monospace"],
      },
      boxShadow: {
        door: "0 15px 35px rgba(0, 0, 0, 0.25)",
      },
      keyframes: {
        "door-fade-in": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "door-fade-in": "door-fade-in 0.5s ease forwards",
      },
    },
  },
  plugins: [],
};

export default config;

