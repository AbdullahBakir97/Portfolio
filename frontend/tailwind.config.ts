import type { Config } from "tailwindcss";

const config = {
  darkMode: "class",
  content: [
    "./**/*.{ts,tsx,js,jsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;

export default config;
