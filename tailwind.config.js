// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#8b5cf6',  // Vibrant purple
          500: '#7c3aed',
          600: '#6d28d9',
        },
        secondary: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          400: '#2dd4bf',  // Teal accent
          600: '#0d9488',
        },
        surface: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          800: '#1e293b',
          900: '#0f172a',
        },
        code: {
          dark: '#1e1e2e',
          light: '#f8fafc',
        }
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
        'float': 'float 6s ease-in-out infinite',
        'gradient-x': 'gradientX 8s ease infinite',
        'text-gradient': 'textGradient 4s ease infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        gradientX: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        textGradient: {
          '0%, 100%': { 'background-position': 'left center' },
          '50%': { 'background-position': 'right center' },
        }
      },
      boxShadow: {
        'tech': '0 10px 30px -15px rgba(2, 12, 27, 0.7)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'neumorphic': '8px 8px 16px #d1d9e6, -8px -8px 16px #ffffff',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}