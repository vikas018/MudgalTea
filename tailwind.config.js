/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        amber: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        // Warm paper backgrounds and near-black ink for editorial contrast.
        cream: {
          DEFAULT: '#fbf7f1',
          100: '#f6efe6',
          200: '#efe4d5',
        },
        ink: {
          DEFAULT: '#2b2119',
          soft: '#5c5147',
        },
      },
      maxWidth: {
        content: '80rem',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        soft: '0 10px 30px -12px rgba(43, 33, 25, 0.18)',
        card: '0 2px 8px -2px rgba(43, 33, 25, 0.10), 0 12px 28px -14px rgba(43, 33, 25, 0.20)',
      },
      letterSpacing: {
        eyebrow: '0.2em',
      },
    },
  },
  plugins: [],
};
