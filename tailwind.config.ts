import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        light: {
          base: '#E8EDF2',       // Main surface color (light gray with slight blue tint)
          shadow: {
            darker: '#C3C8CC',   // Dark shadow
            lighter: '#FFFFFF',   // Light shadow
          },
          accent: {
            primary: '#4A90E2',  // Bright blue
            secondary: '#81A1C1', // Muted blue
            success: '#A3BE8C',   // Soft green
          },
          text: {
            primary: '#2E3440',  // Near black
            secondary: '#4C566A', // Dark gray
            muted: '#7B88A1',    // Medium gray
          }
        },
        dark: {
          base: '#2E3440',       // Main surface color (dark blue-gray)
          shadow: {
            darker: '#272C35',   // Darker shadow
            lighter: '#353B46',   // Lighter shadow
          },
          accent: {
            primary: '#88C0D0',  // Arctic blue
            secondary: '#81A1C1', // Frost blue
            success: '#A3BE8C',   // Aurora green
          },
          text: {
            primary: '#ECEFF4',  // Near white
            secondary: '#D8DEE9', // Light gray
            muted: '#8C96A8',    // Medium gray
          }
        }
      },
      boxShadow: {
        'neu-light': '20px 20px 30px #C3C8CC, -20px -20px 30px #FFFFFF',
        'neu-light-pressed': 'inset 20px 20px 30px #C3C8CC, inset -20px -20px 30px #FFFFFF',
        'neu-light-flat': '5px 5px 10px #C3C8CC, -5px -5px 10px #FFFFFF',
        'neu-dark': '20px 20px 30px #272C35, -20px -20px 30px #353B46',
        'neu-dark-pressed': 'inset 20px 20px 30px #272C35, inset -20px -20px 30px #353B46',
        'neu-dark-flat': '5px 5px 10px #272C35, -5px -5px 10px #353B46',
      },
    },
  },
  plugins: [],
};

export default config;
