import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        skyBright: '#44B3C9',
        tealDark: '#143E46',
        darkTeal: '#143E46',
        'custom-teal': '#246673',
        'light-sky-blue': '#AADFEA',
        'custom-alice-blue': '#EFFCFF',
        'dark-slate-gray': '#246673',
      },
    },
  },
  plugins: [],
};
export default config;
