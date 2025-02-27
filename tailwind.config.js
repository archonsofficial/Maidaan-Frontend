import { transform } from "typescript";

const { nextui } = require("@nextui-org/react");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'Rectangle35': "",
      },
      top:{
        '100':'500px'
      },
      fontFamily: {
        sans: ['Unbounded', 'sans-serif'], // Your custom font
        secondaryFont: ['Raleway','sans-serif']
      },
      keyframes: {
        slideInOut: {
          '0%': { transform: 'translateX(-120%)' },
          // '50%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
        arrowRotate:{
          '0%':{transform: 'rotate(-45deg)'},
          '100%':{transform:'rotate(0deg)'}
        }
      },
      animation: {
        slideInOut: 'slideInOut 8s linear infinite',
        arrowRotate: 'arrowRotate 0.8s linear 1 forwards'
      }, 
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        "purple-dark": {
          extend: "dark", // <- inherit default values from dark theme
          colors: {
            background: "#0A0A0A",
            foreground: "#ffffff",

          },
        },
      },
    },)
  ]
  }
