/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'playfair': ['Playfair Display', 'Georgia', 'serif'],
        'inter': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
      },
      colors: {
        'off-white': '#FDFBF7',
      },
      animation: {
        'float': 'float 20s ease-in-out infinite',
        'float-slow': 'float-slow 25s ease-in-out infinite',
        'float-delayed': 'float-delayed 18s ease-in-out infinite 2s',
        'bounce-slow': 'bounce-slow 3s ease-in-out infinite',
        'bounce-delayed': 'bounce-delayed 3s ease-in-out infinite 1.5s',
      },
      backdropBlur: {
        '3xl': '64px',
      },
      scale: {
        '102': '1.02',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '100': '25rem',
        '128': '32rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      letterSpacing: {
        'tightest': '-0.075em',
        'wide': '0.025em',
      },
      lineHeight: {
        '12': '3rem',
        '14': '3.5rem',
      },
    },
  },
  plugins: [],
};