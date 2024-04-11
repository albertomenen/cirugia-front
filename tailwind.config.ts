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
        'airbnb': '#FF838A',
        'airbnb-dark': '#EAEEF8',
        'airbnb-color':'#FF5A5F',
        'airbnb-boton': '#74E291'
      }
    },
  },
  plugins: [],
};
export default config;
