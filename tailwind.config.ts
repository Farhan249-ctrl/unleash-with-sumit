import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
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
      fontFamily: {
        display: ["Space Grotesk", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        'fluid-xs': 'clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)',
        'fluid-sm': 'clamp(0.875rem, 0.8rem + 0.375vw, 1rem)',
        'fluid-base': 'clamp(1rem, 0.925rem + 0.375vw, 1.125rem)',
        'fluid-lg': 'clamp(1.125rem, 1rem + 0.625vw, 1.25rem)',
        'fluid-xl': 'clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem)',
        'fluid-2xl': 'clamp(1.5rem, 1.3rem + 1vw, 2rem)',
        'fluid-3xl': 'clamp(2rem, 1.7rem + 1.5vw, 3rem)',
        'fluid-4xl': 'clamp(3rem, 2.5rem + 2.5vw, 4.5rem)',
        'fluid-5xl': 'clamp(4rem, 3rem + 5vw, 6rem)',
      },
      letterSpacing: {
        'tight': '-0.025em',
        'tighter': '-0.05em',
        'wide': '0.05em',
        'wider': '0.1em',
        'widest': '0.15em',
      },
      lineHeight: {
        'tight': 1.1,
        'snug': 1.2,
        'relaxed': 1.6,
        'loose': 1.8,
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
        '144': '36rem',
      },
      colors: {
        brand: {
          yellow: "#EAB308",
          "yellow-glow": "#F59E0B",
          black: "#050505",
          dark: "#0A0A0A",
          warm: "#1A1A1A",
        },
        rich: {
          black: "#050505",
        },
        soft: {
          gray: "#EDEDED",
        },
        border: {
          DEFAULT: "#333333",
        },
        input: "#1A1A1A",
        ring: "#EAB308",
        background: "#050505",
        foreground: "#EDEDED",
        secondary: {
          DEFAULT: "#6B7280",
          foreground: "#EDEDED",
        },
        destructive: {
          DEFAULT: "#EF4444",
          foreground: "#F2F2F2",
        },
        muted: {
          DEFAULT: "#1F2937",
          foreground: "#94A3B8",
        },
        accent: {
          DEFAULT: "#EAB308",
          foreground: "#050505",
        },
        popover: {
          DEFAULT: "#1A1A1A",
          foreground: "#EDEDED",
        },
        card: {
          DEFAULT: "#0A0A0A",
          foreground: "#EDEDED",
          glow: "hsl(var(--brand-yellow-glow))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
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
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
