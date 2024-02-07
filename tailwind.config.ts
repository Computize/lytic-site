import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
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

        /**
         * NOTE: Colors used prior to shadcn installation
         */
        'primary-green': "#9bbc5a",
        'primary-blue': '#91caee',
        'secondary-green': "#758d33",
        'background-green': "#ccdcaa",
        'background-dark-gray': '#232323',
        'primary-gray': 'rgb(255,255,255,.3)',
        'background-light-gray': '#F3F3F3',

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
        slideInFromRight: {
          "0%": { opacity: '0', transform: "translateX(100%)" },
          "100%": { opacity: '1', transform: "translateX(0)" }
        },
        slideInFromLeft: {
          "0%": { opacity: '0', transform: "translateX(-100%)" },
          "100%": { opacity: '1', transform: "translateX(0)" }
        },
        slideInFromTop: {
          "0%": { opacity: '0', transform: "translateY(-100%)" },
          "100%": { opacity: '1', transform: "translateY(0)" }
        },
        slideInFromBottom: {
          "0%": { opacity: '0', transform: "translateY(100%)" },
          "100%": { opacity: '1', transform: "translateY(0)" }
        }
      },
      animation: {
        slideInFromRight: "slideInFromRight 1s ease-in-out forwards",
        slideInFromLeft: "slideInFromLeft 1s ease-in-out forwards",
        slideInFromTop: "slideInFromTop 1s ease-in-out forwards",
        slideInFromBottom: "slideInFromBottom 1s ease-in-out forwards",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        'slide-right': 'slide-right 1s forwards'
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;