/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#060B18',
          900: '#0B132B',
          850: '#0E1A38',
          800: '#142147',
          700: '#1E3264',
          600: '#2A4480',
          500: '#3D5E9E',
          100: '#EAF0F9',
          50: '#F4F7FC',
        },
        cardio: {
          red: '#E63946',
          crimson: '#D90429',
          pulse: '#FF4D6D',
          darkRed: '#9B111E',
          lightRed: '#FDF2F4',
        },
        medical: {
          cyan: '#00B4D8',
          teal: '#06D6A0',
          blue: '#0077B6',
          ice: '#F0F7FF',
          slate: '#64748B',
          border: '#E2E8F0',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'Poppins', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        display: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        'cardio-glow': '0 0 35px -5px rgba(230, 57, 70, 0.25)',
        'navy-glow': '0 0 35px -5px rgba(11, 19, 43, 0.15)',
        'premium': '0 20px 40px -15px rgba(11, 19, 43, 0.07)',
        'premium-hover': '0 30px 60px -20px rgba(11, 19, 43, 0.12)',
        'glass': '0 8px 32px 0 rgba(11, 19, 43, 0.05)',
      },
      animation: {
        'heartbeat': 'heartbeat 1.2s ease-in-out infinite',
        'heartbeat-fast': 'heartbeat 0.75s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 3s infinite',
        'ecg-scan': 'ecgScan 2.5s linear infinite',
        'bounce-subtle': 'bounceSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        heartbeat: {
          '0%, 100%': { transform: 'scale(1)' },
          '14%': { transform: 'scale(1.13)' },
          '28%': { transform: 'scale(1)' },
          '42%': { transform: 'scale(1.08)' },
          '70%': { transform: 'scale(1)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.9', transform: 'scale(1)' },
          '50%': { opacity: '0.4', transform: 'scale(1.04)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        ecgScan: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
  plugins: [],
};
