import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563EB',
          dark: '#1E40AF',
          light: '#3B82F6',
        },
        secondary: '#3B82F6',
        accent: '#0EA5E9',
        navy: '#1E293B',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
      animation: {
        'hover-lift': 'hover-lift 0.3s ease-in-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fade-in 0.5s ease-in-out',
        'slide-up': 'slide-up 0.5s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'wiggle': 'wiggle 3s ease-in-out infinite',
      },
      keyframes: {
        'hover-lift': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'wiggle': {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(3deg)' },
          '75%': { transform: 'rotate(-3deg)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(135deg, #2563EB 0%, #0EA5E9 100%)',
        'gradient-hero': 'linear-gradient(135deg, #1E293B 0%, #2563EB 50%, #0EA5E9 100%)',
        'gradient-card': 'linear-gradient(135deg, #3B82F6 0%, #0EA5E9 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
