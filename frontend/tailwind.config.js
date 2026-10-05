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
        cardio: {
          dark: '#0f172a',
          navy: '#1e293b',
          deep: '#334155',
          crimson: '#E63946',
          ruby: '#D90429',
          cyan: '#0284C7',
          teal: '#0D9488',
          accent: '#2563EB',
          gold: '#D97706',
          surface: '#FFFFFF',
          surfaceLight: '#F8FAFC',
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
          "primary": "#E63946",
          "secondary": "#0284C7",
          "accent": "#2563EB",
          "neutral": "#0F172A",
          "base-100": "#FFFFFF",
          "base-200": "#F8FAFC",
          "base-300": "#F1F5F9",
          "info": "#0284C7",
          "success": "#0D9488",
          "warning": "#D97706",
          "error": "#D90429",
        },
      },
      "dark",
    ],
    darkTheme: "dark",
  }
};
