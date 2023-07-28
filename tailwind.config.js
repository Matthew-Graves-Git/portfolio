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
      fade: 'fadeOut 5s ease-out'
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
        '25%': {
          transform: 'translateX(-50%)',
          opacity: 0
        },
        '50%': {
          transform: 'translateX(-25%)',
          opacity: 0.5
        },
        '75%': {
          transform: 'translateX(0)',
          opacity: 1
        }
      }
    },
  },
  plugins: [],
}

