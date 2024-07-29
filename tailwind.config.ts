import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      height: {
        "1/8": "12.5%",
        "7/8": "87.5%",
        "1/9": "11.1111111%",
        "8/9": "88.8888889%",
        "1/10": "10%",
        "9/10": "90%",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    plugin(function ({ addComponents }: { addComponents: Function }) {
      addComponents({
        ".terminal-loader": {
          border: "0.1em solid #333",
          "background-color": "#1a1a1a",
          color: "#0f0",
          "font-family": "Courier New, Courier, monospace",
          "font-size": "1em",
          padding: "1.5em 1em",
          width: "12em",
          margin: "100px auto",
          "box-shadow": "0 4px 8px rgba(0, 0, 0, 0.2)",
          "border-radius": "4px",
          position: "relative",
          overflow: "hidden",
          "box-sizing": "border-box",
        },
        ".terminal-header": {
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1.5em",
          "background-color": "#333",
          "border-top-left-radius": "4px",
          "border-top-right-radius": "4px",
          padding: "0 0.4em",
          "box-sizing": "border-box",
        },
        ".terminal-controls": {
          float: "right",
        },
        ".control": {
          display: "inline-block",
          width: "0.6em",
          height: "0.6em",
          "margin-left": "0.4em",
          "border-radius": "50%",
          "background-color": "#777",
        },
        ".control.close": {
          "background-color": "#e33",
        },
        ".control.minimize": {
          "background-color": "#ee0",
        },
        ".control.maximize": {
          "background-color": "#0b0",
        },
        ".terminal-title": {
          float: "left",
          "line-height": "1.5em",
          color: "#eee",
        },
        ".text": {
          display: "inline-block",
          "white-space": "nowrap",
          overflow: "hidden",
          "border-right": "0.2em solid green" /* Cursor */,
          animation: `typeAndDelete 5s steps(10) infinite, 
            blinkCursor 0.5s step-end infinite alternate`,
          "margin-top": "1.5em",
          "@keyframes blinkCursor": {
            "50%": {
              "border-right-color": "transparent",
            },
          },
          "@keyframes typeAndDelete": {
            "0%, 10%": {
              width: 0,
            },
            "45%, 55%": {
              width: "6.2em",
            } /* adjust width based on content */,
            "90%, 100%": {
              width: 0,
            },
          },
        },
      });
    }),
  ],
} satisfies Config;

export default config;
