module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'ebony-clay': {
          50: '#F5F5F6',
          100: '#EAEAEC',
          200: '#CBCBD0',
          300: '#ABABB3',
          400: '#6C6D7B',
          500: '#2D2E42',
          600: '#29293B',
          700: '#1B1C28',
          800: '#14151E',
          900: '#0E0E14',
          },
          
          'star-dust': {
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#E7E6E7',
          300: '#D8D7D8',
          400: '#BABABA',
          500: '#9D9C9D',
          600: '#8D8C8D',
          700: '#5E5E5E',
          800: '#474647',
          900: '#2F2F2F',
          },
          
          'shuttle-gray': {
          50: '#F7F7F8',
          100: '#F0F0F1',
          200: '#D9D9DB',
          300: '#C1C3C6',
          400: '#93959B',
          500: '#656870',
          600: '#5B5E65',
          700: '#3D3E43',
          800: '#2D2F32',
          900: '#1E1F22',
          },
          
          'comet': {
          50: '#F7F7F9',
          100: '#EFF0F3',
          200: '#D8D9E1',
          300: '#C0C2CF',
          400: '#9095AB',
          500: '#616787',
          600: '#575D7A',
          700: '#3A3E51',
          800: '#2C2E3D',
          900: '#1D1F29',
          },
           
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
