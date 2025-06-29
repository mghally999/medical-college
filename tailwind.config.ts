import type { Config } from "tailwindcss";
const defaultTheme = require('tailwindcss/defaultTheme')

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "darkmd": "rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px",
      },
      colors: {
        primary: "#2F73F2",
        midnight_text: "#102D47",
        border: "#e6e9ec",
        PowderBlue: "#EFFBFF",
        SlateBlue: "#547593",
        LightPeriwinkle: "#CFE0FF",
        placeholder: "#7a83a9",
        stroke: "#CDE0E7",
        footer_stroke: "#EFFBFF",
        PictonBlue: "#46C4FF",
        darkmode: "#091222",
        darklight: "#0b1629",
        dark_border: "#162644",
      },
      inset: {
        28: '28rem',
        40: '40%'
      },
      spacing: {
        22: '22px',
        29: '28rem',
        '3.75': '3.75rem',
        '4.5': '4.5rem',
        '6.5': '6.5rem',
        '36.875': '36.875rem'
      },
      borderRadius: {
        2.5: "2.5rem"
      },
      maxWidth: {
        'xl': '1200px',
      },
      screens: {
        'xs': '475px',
        ...defaultTheme.screens,
      },

    },
  },
  plugins: [],
};
export default config;