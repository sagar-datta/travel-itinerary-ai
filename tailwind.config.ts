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
          base: '#F0F0F0',       // Very light gray base
          shadow: {
            darker: '#D0D0D0',    // Shadow for depth
            lighter: '#FFFFFF',   // Highlight for elevation
          },
          accent: {
            primary: '#555555',   // Dark gray
            secondary: '#777777',  // Medium gray
            success: '#999999',    // Light gray
          },
          text: {
            primary: '#333333',   // Dark gray
            secondary: '#555555',  // Medium gray
            muted: '#777777',     // Light gray
          }
        },
        dark: {
          base: '#333333',       // Dark gray base
          shadow: {
            darker: '#222222',    // Shadow for depth
            lighter: '#444444',    // Highlight for elevation
          },
          accent: {
            primary: '#AAAAAA',   // Light gray
            secondary: '#999999',  // Medium gray
            success: '#888888',    // Dark gray
          },
          text: {
            primary: '#EEEEEE',   // Very light gray
            secondary: '#DDDDDD',  // Light gray
            muted: '#BBBBBB',     // Medium gray
          }
        }
      },
      boxShadow: {
        'neu-light': '8px 8px 16px #D0D0D0, -8px -8px 16px #FFFFFF',
        'neu-light-hover': '4px 4px 8px #D0D0D0, -4px -4px 8px #FFFFFF',
        'neu-light-pressed': 'inset 4px 4px 6px #D0D0D0, inset -4px -4px 6px #FFFFFF',
        'neu-light-flat': '3px 3px 6px #D0D0D0, -3px -3px 6px #FFFFFF',
        'neu-dark': '8px 8px 16px #222222, -8px -8px 16px #444444',
        'neu-dark-hover': '4px 4px 8px #222222, -4px -4px 8px #444444',
        'neu-dark-pressed': 'inset 4px 4px 6px #222222, inset -4px -4px 6px #444444',
        'neu-dark-flat': '3px 3px 6px #222222, -3px -3px 6px #444444',
      },
    },
  },
  plugins: [],
};

export default config;
