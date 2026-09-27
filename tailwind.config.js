/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Royal Kesar Bagh & Heritage Palette
        emerald: {
          50: '#F0F7F4',
          100: '#DBEDE5',
          200: '#B8DC CD',
          300: '#8AC3AC',
          400: '#5BA488',
          500: '#2F8565',
          600: '#1E5A42',
          700: '#174A35', // Primary Royal Green
          800: '#0E3024', // Deep Green / Midnight
          900: '#091F18', // Near-Black Green
          950: '#05120E',
        },
        gold: {
          50: '#FAF7EE',
          100: '#F3EDD7',
          200: '#EAD9A8', // Pale Gold
          300: '#D8BD78', // Light Gold / Champagne
          400: '#CCA95F',
          500: '#C6A15B', // Primary Antique Gold
          600: '#B38E46',
          700: '#947233',
          800: '#765A28',
          900: '#5C441E',
        },
        navy: {
          900: '#17234F', // Royal Navy Accent
          950: '#0E1633',
        },
        burgundy: {
          800: '#641F24', // Royal Burgundy Accent
          900: '#481519',
        },
        ivory: {
          50: '#FFFFFF',
          100: '#FCFAF6',
          200: '#F7F2E7', // Primary Ivory Background
          300: '#EFE5D2', // Warm Cream / Sandstone
          400: '#E5D8C0',
        },
        charcoal: {
          700: '#4A433A',
          800: '#29251F', // Primary Dark Text
          900: '#1A1815', // Deep Charcoal
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'Georgia', 'serif'],
        display: ['"Cinzel"', '"Marcellus"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'royal': '0 10px 30px -5px rgba(14, 48, 36, 0.12)',
        'royal-lg': '0 20px 40px -10px rgba(14, 48, 36, 0.22)',
        'gold': '0 0 25px rgba(198, 161, 91, 0.25)',
      },
      borderWidth: {
        'micro': '1px',
      }
    },
  },
  plugins: [],
}
