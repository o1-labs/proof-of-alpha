const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 1s ease-in forwards'
      },
      colors: {
        'light-black': '#353535',
        'custom-green': '#00FF19',
        'custom-gray': {
          light: '#DBDBDB',
          'button-border': '#D4D4D4',
          'indicator-dot': '#7D7D7D',
          'spinner-background': 'rgba(43, 43, 43, 0.3)',
          DEFAULT: '#666666',
          'header-border': 'rgba(150, 150, 150, 0.5)'
        },
        'custom-pink': '#BD8FA1'
      },
      fontFamily: {
        sans: ['RobotoRegular', 'RobotoThin', ...defaultTheme.fontFamily.sans]
      },
      backgroundImage: {
        background: "url('/assets/common/background.png')",
        'blue-background': "url('/assets/common/blue-background.png')",
        'red-background': "url('/assets/common/red-background.png')",
        'start-background': "url('/assets/common/start-background.png')"
      },
      borderWidth: {
        '1/2': '.5px',
        6: '0.375rem'
      },
      fontSize: {
        '1.5xl': '1.375rem',
        '3.5xl': '2rem',
        '4.5xl': '2.5rem'
      },
      spacing: {
        18: '4.5rem',
        30: '7.5rem',
        40: '11rem',
        57: '14.25rem',
        86: '22rem',
        90: '25rem',
        99: '29.625rem',
        100: '30rem',
        108: '32rem',
        110: '34.5rem',
        115: '42.5625rem',
        120: '45.0625rem',
        121: '46.0625rem',
        122: '47.25rem',
        124: '52.0625rem',
        125: '57rem',
        127: '60.5625rem',
        130: '65rem',
        140: '77.125rem'
      },
      letterSpacing: {
        xlwidest: '.2rem',
        '2xlwidest': '.5rem'
      },
      lineHeight: {
        11: '2.8125rem',
        12: '3rem',
        13: '3.438rem',
        14: '4rem'
      },
      screens: {
        '3xl': '1800px'
      }
    }
  },
  variants: {
    backgroundColor: ['active', 'focus'],
    textColor: ['active', 'focus'],
    animation: ['motion-safe'],
    extend: {
      display: ['hover', 'focus', 'group-hover']
    }
  }
  // plugins: [require('@tailwindcss/forms')]
};
