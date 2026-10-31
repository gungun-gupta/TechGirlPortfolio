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
        dark: {
          950: '#030304',
          900: '#070709',
          850: '#0a0a0d',
          800: '#0f0f14',
          700: '#171720',
          600: '#23232f',
        },
        neon: {
          pink: '#FF2A85',
          hotPink: '#FF007F',
          crimson: '#FF1744',
          rose: '#E11D48',
          purple: '#A855F7',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'neon-pink': '0 0 20px -3px rgba(255, 42, 133, 0.45), 0 0 8px -2px rgba(255, 42, 133, 0.3)',
        'neon-pink-lg': '0 0 35px -5px rgba(255, 42, 133, 0.6), 0 0 15px -3px rgba(255, 42, 133, 0.4)',
        'neon-crimson': '0 0 20px -3px rgba(255, 23, 68, 0.45), 0 0 8px -2px rgba(255, 23, 68, 0.3)',
        'neon-subtle': '0 0 15px -4px rgba(255, 42, 133, 0.25)',
        'glass-card': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'cyber-grid': "linear-gradient(to right, rgba(255, 42, 133, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 42, 133, 0.04) 1px, transparent 1px)",
      },
      animation: {
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'border-beam': 'borderBeam 4s linear infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', filter: 'drop-shadow(0 0 15px rgba(255, 42, 133, 0.3))' },
          '50%': { opacity: '0.8', filter: 'drop-shadow(0 0 28px rgba(255, 42, 133, 0.6))' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
};

