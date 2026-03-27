/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/views/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: {
          0: '#09090B',
          1: '#111113',
          2: '#1A1A1F',
          3: '#232329',
        },
        accent: {
          DEFAULT: '#06B6D4',
          light: '#22D3EE',
          dark: '#0891B2',
          glow: 'rgba(6, 182, 212, 0.15)',
          border: 'rgba(6, 182, 212, 0.25)',
          muted: 'rgba(6, 182, 212, 0.08)',
        },
        text: {
          primary: '#FAFAFA',
          secondary: '#A1A1AA',
          tertiary: '#71717A',
        },
      },
      fontFamily: {
        display: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
        body: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      fontSize: {
        'hero': ['clamp(2.75rem, 5vw + 1rem, 5.5rem)', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        'display-lg': ['clamp(2rem, 3.5vw + 0.5rem, 3.5rem)', { lineHeight: '1.1', letterSpacing: '-0.025em' }],
        'display': ['clamp(1.5rem, 2.5vw + 0.5rem, 2.5rem)', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
      },
      borderRadius: {
        '2xl': '16px',
        '3xl': '20px',
      },
      boxShadow: {
        'glow-sm': '0 0 20px rgba(6,182,212,0.15)',
        'glow-md': '0 0 40px rgba(6,182,212,0.15)',
        'glow-lg': '0 0 80px rgba(6,182,212,0.12)',
        'card': '0 1px 2px rgba(0,0,0,0.3), 0 4px 16px rgba(0,0,0,0.2)',
        'card-hover': '0 4px 8px rgba(0,0,0,0.4), 0 8px 32px rgba(0,0,0,0.3), 0 0 40px rgba(6,182,212,0.08)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 4s ease-in-out infinite',
        'orb-drift': 'orb-drift 20s ease-in-out infinite',
        'orb-drift-2': 'orb-drift-2 25s ease-in-out infinite',
        'grid-fade': 'grid-fade 8s ease-in-out infinite',
      },
      keyframes: {
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        'orb-drift': {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '33%': { transform: 'translate(30px, -20px)' },
          '66%': { transform: 'translate(-20px, 15px)' },
        },
        'orb-drift-2': {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '33%': { transform: 'translate(-25px, 20px)' },
          '66%': { transform: 'translate(20px, -25px)' },
        },
        'grid-fade': {
          '0%, 100%': { opacity: '0.03' },
          '50%': { opacity: '0.06' },
        },
      },
    },
  },
  plugins: [],
}
