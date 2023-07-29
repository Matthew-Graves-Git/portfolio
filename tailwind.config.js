/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      signature: ["Great Vibes"],
    },
    animation: {
      text: 'text 7s ease infinite',
      fade: 'fadeOut 1s'
    },
    keyframes: {
      text: {
        '25%': {
          color: '#00A4BD'
        },
        '50%': {
          color: '#FF7A59'
        },
        '75%': {
          color: '#00BDA5'
        }
      },
      fadeOut:{
        '0%': {
          transform: 'translateX(-15px)',
          transitition:'opacity .6s cubic-bezier(0.16, 1, 0.3, 1),transform .6s cubic-bezier(0.16, 1, 0.3, 1)',
          opacity: 0
        },
        '100%': {
          transform: 'translateX(0)',
          opacity: 1
        }
      }
    },
  },
  plugins: [],
}

