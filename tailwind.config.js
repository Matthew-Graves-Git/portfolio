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
    },
  },
  plugins: [],
}

