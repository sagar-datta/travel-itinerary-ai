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
        'neu-light': '6px 6px 12px rgba(208,208,208,0.8), -6px -6px 12px rgba(255,255,255,0.8)',
        'neu-light-hover': '4px 4px 8px rgba(208,208,208,0.8), -4px -4px 8px rgba(255,255,255,0.8)',
        'neu-light-pressed': 'inset 4px 4px 6px rgba(208,208,208,0.8), inset -4px -4px 6px rgba(255,255,255,0.8)',
        'neu-light-flat': '3px 3px 6px rgba(208,208,208,0.8), -3px -3px 6px rgba(255,255,255,0.8)',
        'neu-dark': '6px 6px 12px rgba(34,34,34,0.8), -6px -6px 12px rgba(68,68,68,0.8)',
        'neu-dark-hover': '4px 4px 8px rgba(34,34,34,0.8), -4px -4px 8px rgba(68,68,68,0.8)',
        'neu-dark-pressed': 'inset 4px 4px 6px rgba(34,34,34,0.8), inset -4px -4px 6px rgba(68,68,68,0.8)',
        'neu-dark-flat': '3px 3px 6px rgba(34,34,34,0.8), -3px -3px 6px rgba(68,68,68,0.8)',
        // New subtle shadows
        'neu-light-subtle': '3px 3px 6px rgba(208,208,208,0.9), -3px -3px 6px rgba(255,255,255,0.9)',
        'neu-light-subtle-pressed': 'inset 2px 2px 4px rgba(208,208,208,0.9), inset -2px -2px 4px rgba(255,255,255,0.9)',
        'neu-dark-subtle': '3px 3px 6px rgba(34,34,34,0.9), -3px -3px 6px rgba(68,68,68,0.9)',
        'neu-dark-subtle-pressed': 'inset 2px 2px 4px rgba(34,34,34,0.9), inset -2px -2px 4px rgba(68,68,68,0.9)',
      },
    },
  },
  plugins: [],
};

export default config;
