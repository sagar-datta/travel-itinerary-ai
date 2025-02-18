import type { Config } from "tailwindcss";

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
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        placeholder: "#6B7280",
        light: {
          base: "#F0F0F0", // Very light gray base
          shadow: {
            darker: "#D0D0D0", // Shadow for depth
            lighter: "#FFFFFF", // Highlight for elevation
          },
          accent: {
            primary: "#555555", // Dark gray
            secondary: "#777777", // Medium gray
            success: "#999999", // Light gray
          },
          text: {
            primary: "#333333", // Dark gray
            secondary: "#555555", // Medium gray
            muted: "#777777", // Light gray
          },
        },
        dark: {
          base: "#333333", // Dark gray base
          shadow: {
            darker: "#222222", // Shadow for depth
            lighter: "#444444", // Highlight for elevation
          },
          accent: {
            primary: "#AAAAAA", // Light gray
            secondary: "#999999", // Medium gray
            success: "#888888", // Dark gray
          },
          text: {
            primary: "#EEEEEE", // Very light gray
            secondary: "#DDDDDD", // Light gray
            muted: "#BBBBBB", // Medium gray
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
        "neu-dark": "8px 8px 16px #222222, -8px -8px 16px #444444",
        "neu-dark-hover": "2px 2px 4px #222222, -2px -2px 4px #444444",
        "neu-dark-pressed":
          "inset 8px 8px 16px #222222, inset -8px -8px 16px #444444",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
};

export default config;
