/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#125083',     // 🔵 Primary Navy Blue (#125083 -> Navbar, headings, buttons)
          teal: '#41A490',        // 🟢 Secondary Teal (#41A490 -> Highlights, icons, secondary buttons)
          red: '#EC242E',         // 🔴 Accent Red (#EC242E -> CTA / important highlights only)
          white: '#FFFFFF',       // ⚪ Main Background (#FFFFFF)
          softGray: '#F5F8FA',    // 🌫️ Section Background (#F5F8FA)
          darkNavy: '#123B5D',    // 🔵 Dark Text (#123B5D)
        },
        cardio: {
          dark: '#123B5D',        // Dark Text (#123B5D)
          navy: '#125083',        // Primary Navy Blue (#125083)
          deep: '#123B5D',        // Navy Dark (#123B5D)
          crimson: '#EC242E',     // Accent Red (#EC242E)
          ruby: '#D01B24',        // Deep Brand Red
          cyan: '#41A490',        // Secondary Teal (#41A490)
          teal: '#41A490',        // Hospital Green/Teal (#41A490)
          accent: '#125083',      // Primary Navy (#125083)
          gold: '#D97706',
          surface: '#FFFFFF',     // Main Background (#FFFFFF)
          surfaceLight: '#F5F8FA',// Section Background (#F5F8FA)
          border: '#E2E8F0',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        heading: ['Outfit', 'Plus Jakarta Sans', 'sans-serif']
      },
      animation: {
        'heartbeat': 'heartbeat 1.2s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'ecg-scan': 'ecgScan 4s linear infinite',
        'float-slow': 'floatSlow 6s ease-in-out infinite',
      },
      keyframes: {
        heartbeat: {
          '0%, 100%': { transform: 'scale(1)' },
          '14%': { transform: 'scale(1.08)' },
          '28%': { transform: 'scale(1.01)' },
          '42%': { transform: 'scale(1.12)' },
          '70%': { transform: 'scale(1)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.5', filter: 'drop-shadow(0 0 10px rgba(230, 57, 70, 0.3))' },
          '50%': { opacity: '0.9', filter: 'drop-shadow(0 0 25px rgba(230, 57, 70, 0.6))' },
        },
        ecgScan: {
          '0%': { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' }
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      },
      boxShadow: {
        'glow-red': '0 0 25px -5px rgba(230, 57, 70, 0.35)',
        'glow-cyan': '0 0 25px -5px rgba(2, 132, 199, 0.35)',
        'glow-card': '0 10px 30px -5px rgba(15, 23, 42, 0.08), 0 0 15px rgba(2, 132, 199, 0.05)',
        'card-soft': '0 4px 20px -2px rgba(15, 23, 42, 0.06), 0 0 3px rgba(0, 0, 0, 0.04)',
      }
    },
  },
  plugins: [
    require("daisyui")
  ],
  daisyui: {
    themes: [
      {
        light: {
          "primary": "#125083",      // 🔵 Primary Navy Blue
          "secondary": "#41A490",    // 🟢 Secondary Teal
          "accent": "#EC242E",       // 🔴 Accent Red
          "neutral": "#123B5D",      // 🔵 Dark Text
          "base-100": "#FFFFFF",     // ⚪ Main Background
          "base-200": "#F5F8FA",     // 🌫️ Section Background
          "base-300": "#E9F0F4",
          "info": "#125083",
          "success": "#41A490",
          "warning": "#D97706",
          "error": "#EC242E",
        },
      },
      "dark",
    ],
    darkTheme: "dark",
  }
};
