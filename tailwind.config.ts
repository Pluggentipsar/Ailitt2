import type { Config } from "tailwindcss";
import { designTokens } from "./lib/design-tokens";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    // AI Literacy badge colors - backgrounds
    'from-purple-50', 'via-violet-50', 'to-purple-100',
    'from-blue-50', 'via-sky-50', 'to-blue-100',
    'from-green-50', 'via-emerald-50', 'to-green-100',
    'from-red-50', 'via-rose-50', 'to-red-100',
    'from-orange-50', 'via-amber-50', 'to-orange-100',
    'from-fuchsia-50', 'via-pink-50', 'to-fuchsia-100',
    'from-teal-50', 'via-cyan-50', 'to-teal-100',
    // AI Literacy badge colors - dots
    'from-purple-400', 'to-violet-600',
    'from-blue-400', 'to-sky-600',
    'from-green-400', 'to-emerald-600',
    'from-red-400', 'to-rose-600',
    'from-orange-400', 'to-amber-600',
    'from-fuchsia-400', 'to-pink-600',
    'from-teal-400', 'to-cyan-600',
    // AI Literacy badge colors - rings
    'ring-purple-400/50',
    'ring-blue-400/50',
    'ring-green-400/50',
    'ring-red-400/50',
    'ring-orange-400/50',
    'ring-fuchsia-400/50',
    'ring-teal-400/50',
  ],
  theme: {
    extend: {
      colors: {
        // Shadcn UI colors (behåll för komponenter)
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
          50: designTokens.colors.primary[50],
          100: designTokens.colors.primary[100],
          200: designTokens.colors.primary[200],
          300: designTokens.colors.primary[300],
          400: designTokens.colors.primary[400],
          500: designTokens.colors.primary[500],
          600: designTokens.colors.primary[600],
          700: designTokens.colors.primary[700],
          800: designTokens.colors.primary[800],
          900: designTokens.colors.primary[900],
          DEFAULT: designTokens.colors.primary[500],
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
          50: designTokens.colors.accent[50],
          100: designTokens.colors.accent[100],
          200: designTokens.colors.accent[200],
          300: designTokens.colors.accent[300],
          400: designTokens.colors.accent[400],
          500: designTokens.colors.accent[500],
          600: designTokens.colors.accent[600],
          700: designTokens.colors.accent[700],
          800: designTokens.colors.accent[800],
          900: designTokens.colors.accent[900],
          DEFAULT: designTokens.colors.accent[500],
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        // Nya semantiska färger från designsystemet
        success: designTokens.colors.success,
        warning: designTokens.colors.warning,
        error: designTokens.colors.error,
        // Modern Playful Palette
        modern: {
          bg: '#FFFCF8',
          primary: '#FF6B6B', // Coral
          secondary: '#4ECDC4', // Mint
          accent: '#FFE66D', // Yellow
          text: '#2D3436', // Dark Grey
          purple: '#A855F7', // Existing purple for continuity
          gradient: {
            'sunset': 'linear-gradient(135deg, #FF6B6B 0%, #FF8E53 100%)',
            'ocean': 'linear-gradient(135deg, #4ECDC4 0%, #556270 100%)',
            'mint': 'linear-gradient(135deg, #4ECDC4 0%, #22D3EE 100%)',
            'berry': 'linear-gradient(135deg, #A855F7 0%, #EC4899 100%)',
            'sunshine': 'linear-gradient(135deg, #FFE66D 0%, #FFD93D 100%)',
            'hero': 'linear-gradient(135deg, #FFF1EB 0%, #ACE0F9 100%)',
          }
        },
      },
      backgroundImage: {
        'gradient-modern-sunset': 'linear-gradient(135deg, #FF6B6B 0%, #FF8E53 100%)',
        'gradient-modern-ocean': 'linear-gradient(135deg, #4ECDC4 0%, #22D3EE 100%)', // Brighter ocean
        'gradient-modern-berry': 'linear-gradient(135deg, #c084fc 0%, #db2777 100%)',
        'gradient-modern-gold': 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
        'gradient-modern-hero': 'linear-gradient(120deg, #fdfbf7 0%, #e0f2fe 100%)', // Softer hero
        'gradient-primary': designTokens.colors.gradient.primary,
        'gradient-accent': designTokens.colors.gradient.accent,
        'gradient-warm': designTokens.colors.gradient.warm,
        'gradient-cool': designTokens.colors.gradient.cool,
        'gradient-radial': 'radial-gradient(circle at top right, var(--tw-gradient-stops))',
        'gradient-mesh': 'radial-gradient(at 40% 20%, rgb(20 184 166 / 0.3) 0px, transparent 50%), radial-gradient(at 80% 0%, rgb(168 85 247 / 0.3) 0px, transparent 50%), radial-gradient(at 0% 50%, rgb(59 130 246 / 0.3) 0px, transparent 50%)',
      },
      borderRadius: {
        none: designTokens.borderRadius.none,
        sm: designTokens.borderRadius.sm,
        base: designTokens.borderRadius.base,
        md: designTokens.borderRadius.md,
        lg: designTokens.borderRadius.lg,
        xl: designTokens.borderRadius.xl,
        full: designTokens.borderRadius.full,
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
        fredoka: ["var(--font-fredoka)", "sans-serif"],
        nunito: ["var(--font-nunito)", "sans-serif"],
        mono: [
          "ui-monospace",
          "JetBrains Mono",
          "Fira Code",
          "monospace",
        ],
      },
      fontSize: {
        'display-lg': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-sm': ['2.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'h1-lg': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'h1-sm': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'h2-lg': ['2.25rem', { lineHeight: '1.25' }],
        'h2-sm': ['1.875rem', { lineHeight: '1.25' }],
        'h3-lg': ['1.5rem', { lineHeight: '1.35' }],
        'h3-sm': ['1.25rem', { lineHeight: '1.35' }],
        'body-lg': ['1.125rem', { lineHeight: '1.7' }],
        'body-base': ['1rem', { lineHeight: '1.7' }],
        'body-sm': ['0.875rem', { lineHeight: '1.7' }],
      },
      boxShadow: {
        '1': designTokens.shadows[1],
        '2': designTokens.shadows[2],
        '3': designTokens.shadows[3],
        '4': designTokens.shadows[4],
        '5': designTokens.shadows[5],
      },
      transitionDuration: {
        fast: '150ms',
        base: '200ms',
        slow: '300ms',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
        bounce: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      zIndex: {
        dropdown: '1000',
        sticky: '1100',
        fixed: '1200',
        modal: '1300',
        'sheet-overlay': '1350',
        sheet: '1360',
        popover: '1400',
        tooltip: '1500',
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
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "fade-in-up": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-down": {
          from: { opacity: "0", transform: "translateY(-20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in-right": {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(0)" },
        },
        "scale-in": {
          from: { opacity: "0", transform: "scale(0.95)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
        "blob": {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
        "fade-in-up": "fade-in-up 0.6s ease-out",
        "fade-in-down": "fade-in-down 0.4s ease-out",
        "slide-in-right": "slide-in-right 0.3s ease-out",
        "scale-in": "scale-in 0.3s ease-out",
        "shimmer": "shimmer 2s linear infinite",
        "blob": "blob 7s infinite",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};

export default config;
