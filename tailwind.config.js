const colors = require('tailwindcss/colors');

// default Morpheme Color
const primary = {
  DEFAULT: '#28A0F6',
  50: '#D8EEFD',
  100: '#C5E5FD',
  200: '#9DD4FB',
  300: '#76C3F9',
  400: '#4FB1F8',
  500: '#28A0F6',
  600: '#0984DD',
  700: '#0764A7',
  800: '#054471',
  900: '#02233B',
};

// default Morpheme Color
const secondary = {
  DEFAULT: '#FF8B49',
  50: '#FFFFFF',
  100: '#FFF3EC',
  200: '#FFD9C3',
  300: '#FFBF9B',
  400: '#FFA572',
  500: '#FF8B49',
  600: '#FF6711',
  700: '#D84E00',
  800: '#A03A00',
  900: '#682600',
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./node_modules/@morpheme/**/src/**/*.{vue,js,ts,jsx,tsx,css}'],
  theme: {
    extend: {
      colors: {
        primary,
        secondary,
        info: colors.sky,
        success: colors.emerald,
        warning: colors.yellow,
        error: colors.rose,
        myLight: '#363434',
        secondaryLight: '#D6D6D6',
        textLight: '#333333',
        myDark: '#1F2937',
        secondaryDark: '#374151',
        textDark: '#FFFAFA',
        Light: '#E2E8F0',
      },
    },
    fontFamily: {
      rubik: ['Rubik', 'sans-serif'],
    }
  },
  presets: [require('@morpheme/tailwind-config/preset')],
};
