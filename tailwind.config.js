module.exports = {
  mode: 'jit',
  content: ['./src/**/**/*.{js,ts,jsx,tsx,html,mdx}', './src/**/*.{js,ts,jsx,tsx,html,mdx}', 'node_modules/flowbite-react/lib/esm/**/*.js'],
  darkMode: 'class',
  theme: {
    // screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      screens: { sm: { min: '1px', max: '767px' }, md: { min: '768px', max: '1299px' }, lg: '1300px' },
      colors: {
        gray: {
          50: '#edffff',
          200: '#e6e7eb',
          600: '#737373',
          900: '#060b3b',
          '900_14': '#060c3b14',
          '900_99': '#060b3b99',
        },
        black: { 900: '#000000' },
        white: { A700: '#ffffff', A700_a2: '#ffffffa2', A700_99: '#ffffff99' },
        light_blue: { 500: '#00a4ef' },
        amber: { 300: '#ffdb5f', 600: '#ffb900' },
        red: { 300: '#d88383', 800: '#ce0f24' },
        yellow: { 700: '#e1b92d' },
        lime: { 700: '#d2ad28' },
        colors: 'cyan_300',
        bluegray: {
          100: '#c6d5d5',
          200: '#b4b6c4',
          600: '#5d6180',
          700: '#446b6b',
          701: '#456b6b',
        },
        light_green: { 500: '#95bf47', 800: '#5e8e3e', A700: '#7fba00' },
        green: { 400: '#66bb6e' },
        teal: {
          200: '#84c5c5',
          201: '#8cd0d0',
          202: '#84c6c6',
          400: '#20a2a2',
          401: '#209fa0',
        },
        deep_purple: { 300: '#988fce' },
        deep_orange: { 600: '#f25022' },
        indigo: { '900_0c': '#1c24690c' },
      },
      boxShadow: {
        bs: '0px 6px  20px 0px #1c24690c',
        bs1: '0px 8px  40px -2px #060c3b14',
      },
      fontFamily: { cinzeldecorative: 'Cinzel Decorative', chivo: 'Chivo' },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('flowbite/plugin')],
};
