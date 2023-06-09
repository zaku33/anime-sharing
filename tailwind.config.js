/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "app/**/*.{js,ts,jsx,tsx,mdx}",
    "layout/**/*.{js,ts,jsx,tsx,mdx}",
    "pages/**/*.{js,ts,jsx,tsx,mdx}",
    "components/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/flowbite/**/*.js",
    "node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'dark': '#000000',
      'main-navbar': '#59cdb7',
      'hot-trend': 'red',
      // 'white': '#ffffff',
      // 'purple': '#3f3cbb',
      // 'midnight': '#121063',
      // 'metal': '#565584',
      // 'tahiti': '#3ab7bf',
      // 'silver': '#ecebff',
      // 'bubble-gum': '#ff77e9',
      // 'bermuda': '#78dcca',
    },
    backgroundImage: {
      'theme-bg': "url('/img/background.jpeg')"
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        // '16': '4rem',
        // '128': '32rem',
        // '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      // minHeight: (theme) => ({
      //   ...theme('spacing'),
      // }),
    }
  },
  plugins: [
    require('flowbite/plugin'),
  ],
  darkMode: 'class'
};
