import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Base colors
        background: "#F0F0F0", // Light mode default
        foreground: "#333333",

        // Card colors
        card: {
          DEFAULT: "#F0F0F0",
          foreground: "#333333",
        },

        // Popover colors
        popover: {
          DEFAULT: "#F0F0F0",
          foreground: "#333333",
        },

        // Primary colors
        primary: {
          DEFAULT: "#3B82F6",
          foreground: "#FFFFFF",
        },

        // Secondary colors
        secondary: {
          DEFAULT: "#F0F0F0",
          foreground: "#333333",
        },

        // Muted colors
        muted: {
          DEFAULT: "#F5F5F5",
          foreground: "#737373",
        },

        // Accent colors
        accent: {
          DEFAULT: "#F5F5F5",
          foreground: "#333333",
        },

        // Destructive colors
        destructive: {
          DEFAULT: "#EF4444",
          foreground: "#FFFFFF",
        },

        // Utility colors
        border: "#E5E7EB",
        input: "#E5E7EB",
        ring: "#3B82F6",
        placeholder: "#6B7280",

        // Light theme
        light: {
          base: "#F0F0F0",
          shadow: {
            darker: "#D0D0D0",
            lighter: "#FFFFFF",
          },
          accent: {
            primary: "#555555",
            secondary: "#777777",
            success: "#999999",
          },
          text: {
            primary: "#333333",
            secondary: "#555555",
            muted: "#777777",
          },
        },

        // Dark theme
        dark: {
          base: "#363636",
          shadow: {
            darker: "#2A2A2A",
            lighter: "#424242",
          },
          accent: {
            primary: "#AAAAAA",
            secondary: "#999999",
            success: "#888888",
          },
          text: {
            primary: "#EEEEEE",
            secondary: "#DDDDDD",
            muted: "#BBBBBB",
          },
        },
      },
      boxShadow: {
        // Light theme shadows
        "neu-light": "8px 8px 16px #d1d9e6, -8px -8px 16px #ffffff",
        "neu-light-hover": "2px 2px 4px #d1d9e6, -2px -2px 4px #ffffff",
        "neu-light-pressed":
          "inset 8px 8px 16px #d1d9e6, inset -8px -8px 16px #ffffff",

        // Dark theme shadows
        "neu-dark": "8px 8px 16px #2A2A2A, -8px -8px 16px #424242",
        "neu-dark-hover": "4px 4px 8px #2A2A2A, -4px -4px 8px #424242",
        "neu-dark-pressed":
          "inset 8px 8px 16px #2A2A2A, inset -8px -8px 16px #424242",
      },
      borderRadius: {
        lg: "0.5rem",
        md: "0.3rem",
        sm: "0.1rem",
      },
      transitionProperty: {
        neu: "box-shadow",
      },
      transitionTimingFunction: {
        neu: "ease",
      },
      transitionDuration: {
        neu: "300ms",
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, addUtilities }) {
      addBase({
        body: {
          "@apply bg-background text-foreground": {},
        },
      });
      addUtilities({
        ".pt-safe": {
          paddingTop: "env(safe-area-inset-top)",
        },
        ".pb-safe": {
          paddingBottom: "env(safe-area-inset-bottom)",
        },
        ".pl-safe": {
          paddingLeft: "env(safe-area-inset-left)",
        },
        ".pr-safe": {
          paddingRight: "env(safe-area-inset-right)",
        },
      });
    }),
    require("@tailwindcss/typography"),
  ],
};

export default config;
