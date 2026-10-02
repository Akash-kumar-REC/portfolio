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
        navy: {
          950: '#070C15',
          900: '#0B1220',
          850: '#0E172A',
          800: '#111B2E',
          750: '#16233B',
          700: '#1E2D4A',
          600: '#2A3F66',
        },
        cyan: {
          DEFAULT: '#22D3EE',
          glow: '#06B6D4',
          accent: '#38BDF8',
          light: '#67E8F9',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'cyan-glow': '0 0 20px -3px rgba(34, 211, 238, 0.35)',
        'cyan-glow-lg': '0 0 30px -2px rgba(34, 211, 238, 0.5)',
        'cyan-glow-sm': '0 0 10px -2px rgba(34, 211, 238, 0.3)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
