import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,mdx}",
    "./src/components/**/*.{astro,js,ts,jsx,tsx}",
    "./node_modules/@shadcn/ui/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        "border-1": "var(--border)",
      },
    },
  },
  plugins: [],
};

export default config;
