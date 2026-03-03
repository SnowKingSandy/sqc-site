/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
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
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
        display: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        title: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Quantum/Tech Color Palette - Flat structure for utility generation
        'quantum-bg': '#0B0F1A',
        'quantum-bg-secondary': '#0F1628',
        'quantum-bg-tertiary': '#141B2D',
        'quantum-primary': '#00F0FF',
        'quantum-primary-dark': '#00A8B5',
        'quantum-primary-light': '#33F7FF',
        'quantum-primary-muted': '#00F0FF33',
        'quantum-secondary': '#7B2FF7',
        'quantum-secondary-dark': '#5A1FB8',
        'quantum-secondary-light': '#9E5FF9',
        'quantum-secondary-muted': '#7B2FF733',
        'quantum-accent': '#FF2E9A',
        'quantum-accent-dark': '#CC2478',
        'quantum-accent-light': '#FF6BB3',
        'quantum-accent-muted': '#FF2E9A33',
        'quantum-text': '#E6F1FF',
        'quantum-text-secondary': '#A8C5FF',
        'quantum-text-tertiary': '#6B8CB8',
        'quantum-text-muted': '#4A5F7F',
        'quantum-border': '#1A2332',
        'quantum-border-light': '#2A3545',
        'quantum-surface': '#131820',
        'quantum-surface-hover': '#1A2332',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'fade-in-down': 'fadeInDown 0.8s ease-out',
        'slide-in-left': 'slideInLeft 0.8s ease-out',
        'slide-in-right': 'slideInRight 0.8s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        'blob': 'blob 7s infinite',
        'glow': 'glow 3s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2s infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'spin-slower': 'spin 30s linear infinite',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        blob: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
        },
        glow: {
          '0%, 100%': { 'box-shadow': '0 0 20px rgba(0, 240, 255, 0.3)' },
          '50%': { 'box-shadow': '0 0 40px rgba(123, 47, 247, 0.5)' },
        },
        glowPulse: {
          '0%, 100%': { 'box-shadow': '0 0 20px rgba(0, 240, 255, 0.4)' },
          '50%': { 'box-shadow': '0 0 30px rgba(255, 46, 154, 0.4)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'glow-gradient': 'radial-gradient(circle at 20% 50%, rgba(0, 240, 255, 0.1), transparent 50%), radial-gradient(circle at 80% 80%, rgba(123, 47, 247, 0.1), transparent 50%)',
      },
      boxShadow: {
        'glow-cyan': '0 0 20px rgba(0, 240, 255, 0.4)',
        'glow-cyan-lg': '0 0 40px rgba(0, 240, 255, 0.3)',
        'glow-purple': '0 0 20px rgba(123, 47, 247, 0.4)',
        'glow-magenta': '0 0 20px rgba(255, 46, 154, 0.4)',
        'neon': '0 0 10px rgba(0, 240, 255, 0.5), 0 0 20px rgba(123, 47, 247, 0.3)',
      },
      backdropBlur: {
        'xs': '2px',
      },
      spacing: {
        'section': '6rem',
        'section-sm': '4rem',
      },
    },
  },
  plugins: [],
}
