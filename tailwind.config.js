/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': ['"Cormorant Garamond"', 'serif'],
        'body': ['"DM Sans"', 'sans-serif'],
        'accent': ['"Playfair Display"', 'serif'],
      },
      colors: {
        espresso: {
          50:  '#fdf8f3',
          100: '#f9eddf',
          200: '#f1d9bc',
          300: '#e6be90',
          400: '#d99a5e',
          500: '#cc7d3a',
          600: '#be6830',
          700: '#9e5229',
          800: '#7f4226',
          900: '#673723',
          950: '#371a0f',
        },
        cream: {
          50:  '#fefdf9',
          100: '#fdf9ef',
          200: '#f9f0d9',
          300: '#f3e3b8',
          400: '#eacf8a',
          500: '#dfb85c',
        },
        obsidian: {
          900: '#0e0b08',
          800: '#1a1410',
          700: '#251d17',
          600: '#32271e',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
}
