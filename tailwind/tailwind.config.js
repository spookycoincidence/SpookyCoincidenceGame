/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        backgroundImage: {
          'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
          'gradient-conic':
            'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        },
        animation: {
          'spin-slow': 'spin 3s linear infinite',
          'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        },
        transitionProperty: {
          'height': 'height',
          'spacing': 'margin, padding',
        },
      },
    },
    plugins: [
      function ({ addUtilities }) {
        const newUtilities = {
          '.backface-hidden': {
            'backface-visibility': 'hidden',
          },
          '.perspective-1000': {
            'perspective': '1000px',
          },
          '.rotate-y-180': {
            'transform': 'rotateY(180deg)',
          },
          '.transform-gpu': {
            'transform': 'translateZ(0)',
          },
        }
        addUtilities(newUtilities)
      },
    ],
  }