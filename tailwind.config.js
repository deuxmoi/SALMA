/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable dark mode toggle via a 'dark' class on the html/body element
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#111111', // Rich black
          light: '#333333',   // Soft black
          dark: '#000000',    // Pure black
        },
        accent: {
          DEFAULT: '#111111', // Also black for accent
          light: '#444444',
          dark: '#000000',
        },
        slate: {
          50:  '#F7F2EA',  // Main page background — warm cream beige
          100: '#EDE5D8',  // Cards background — slightly deeper beige
          200: '#DDD3C2',  // Borders — sand
          300: '#C8BAA5',  // Muted borders
          400: '#A0917E',  // Placeholder / muted text
          500: '#7A6C5A',  // Secondary text
          600: '#5A4E3E',  // Body text medium
          700: '#3B3028',  // Dark text
          800: '#211A13',  // Very dark
          900: '#140F09',  // Near black
          950: '#0A0704',  // Darkest
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
