/**
 * AI-litt Design System
 * Design tokens för färger, typografi, spacing och andra designbeslut
 */

export const designTokens = {
  // Primära färger - Modern teal/cyan för AI/tech-känsla
  colors: {
    primary: {
      50: '#f0fdfa',
      100: '#ccfbf1',
      200: '#99f6e4',
      300: '#5eead4',
      400: '#2dd4bf',
      500: '#14b8a6',  // Huvudfärg - vibrant teal
      600: '#0d9488',
      700: '#0f766e',
      800: '#115e59',
      900: '#134e4a',
    },
    accent: {
      50: '#faf5ff',
      100: '#f3e8ff',
      200: '#e9d5ff',
      300: '#d8b4fe',
      400: '#c084fc',
      500: '#a855f7',  // Accent - vibrant purple
      600: '#9333ea',
      700: '#7e22ce',
      800: '#6b21a8',
      900: '#581c87',
    },
    // Gradient färger för hero och cards
    gradient: {
      primary: 'linear-gradient(135deg, #14b8a6 0%, #06b6d4 50%, #3b82f6 100%)',
      accent: 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)',
      warm: 'linear-gradient(135deg, #f97316 0%, #ef4444 100%)',
      cool: 'linear-gradient(135deg, #06b6d4 0%, #8b5cf6 100%)',
    },
    // AI-literacy färger (från befintlig config, men med fler nyanser)
    aiLiteracy: {
      purple: {
        light: '#f3e8ff',
        main: '#a855f7',
        dark: '#7e22ce',
      },
      blue: {
        light: '#dbeafe',
        main: '#3b82f6',
        dark: '#1e40af',
      },
      green: {
        light: '#dcfce7',
        main: '#22c55e',
        dark: '#15803d',
      },
      red: {
        light: '#fee2e2',
        main: '#ef4444',
        dark: '#b91c1c',
      },
      orange: {
        light: '#fed7aa',
        main: '#f97316',
        dark: '#c2410c',
      },
      fuchsia: {
        light: '#fae8ff',
        main: '#d946ef',
        dark: '#a21caf',
      },
      teal: {
        light: '#ccfbf1',
        main: '#14b8a6',
        dark: '#0f766e',
      },
    },
    // Neutrala färger
    neutral: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#e5e5e5',
      300: '#d4d4d4',
      400: '#a3a3a3',
      500: '#737373',
      600: '#525252',
      700: '#404040',
      800: '#262626',
      900: '#171717',
    },
    // Semantic färger
    success: {
      light: '#dcfce7',
      main: '#22c55e',
      dark: '#15803d',
    },
    warning: {
      light: '#fef3c7',
      main: '#f59e0b',
      dark: '#b45309',
    },
    error: {
      light: '#fee2e2',
      main: '#ef4444',
      dark: '#b91c1c',
    },
  },

  // Typografi
  typography: {
    fontFamily: {
      sans: 'var(--font-inter), system-ui, -apple-system, sans-serif',
      mono: 'ui-monospace, "JetBrains Mono", "Fira Code", monospace',
    },
    fontSize: {
      // Desktop först, mobile i parentes
      display: {
        desktop: '3.5rem',    // 56px
        mobile: '2.5rem',     // 40px
        lineHeight: '1.1',
        letterSpacing: '-0.02em',
      },
      h1: {
        desktop: '3rem',      // 48px
        mobile: '2.25rem',    // 36px
        lineHeight: '1.2',
        letterSpacing: '-0.01em',
      },
      h2: {
        desktop: '2.25rem',   // 36px
        mobile: '1.875rem',   // 30px
        lineHeight: '1.25',
      },
      h3: {
        desktop: '1.5rem',    // 24px
        mobile: '1.25rem',    // 20px
        lineHeight: '1.35',
      },
      h4: {
        desktop: '1.25rem',   // 20px
        mobile: '1.125rem',   // 18px
        lineHeight: '1.4',
      },
      body: {
        large: '1.125rem',    // 18px - optimal läsbarhet
        base: '1rem',         // 16px
        small: '0.875rem',    // 14px
        lineHeight: '1.7',
      },
      caption: {
        size: '0.75rem',      // 12px
        lineHeight: '1.5',
      },
    },
  },

  // Spacing (8px base unit)
  spacing: {
    0: '0',
    1: '0.25rem',   // 4px
    2: '0.5rem',    // 8px
    3: '0.75rem',   // 12px
    4: '1rem',      // 16px
    5: '1.25rem',   // 20px
    6: '1.5rem',    // 24px
    8: '2rem',      // 32px
    10: '2.5rem',   // 40px
    12: '3rem',     // 48px
    16: '4rem',     // 64px
    20: '5rem',     // 80px
    24: '6rem',     // 96px
  },

  // Border radius
  borderRadius: {
    none: '0',
    sm: '0.25rem',   // 4px
    base: '0.5rem',  // 8px
    md: '0.75rem',   // 12px
    lg: '1rem',      // 16px
    xl: '1.5rem',    // 24px
    full: '9999px',
  },

  // Shadows (elevation system)
  shadows: {
    0: 'none',
    1: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
    2: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    3: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    4: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    5: '0 25px 50px -12px rgb(0 0 0 / 0.25)',
  },

  // Transitions
  transitions: {
    fast: '150ms cubic-bezier(0.4, 0, 0.2, 1)',
    base: '200ms cubic-bezier(0.4, 0, 0.2, 1)',
    slow: '300ms cubic-bezier(0.4, 0, 0.2, 1)',
    bounce: '500ms cubic-bezier(0.34, 1.56, 0.64, 1)',
  },

  // Z-index layers
  zIndex: {
    base: 0,
    dropdown: 1000,
    sticky: 1100,
    fixed: 1200,
    modal: 1300,
    popover: 1400,
    tooltip: 1500,
  },
} as const;

export type DesignTokens = typeof designTokens;
