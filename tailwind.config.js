module.exports = {
  prefix: 'twcss-',
  content: [
    './layout/*.liquid',
    './templates/*.liquid',
    './templates/customers/*.liquid',
    './sections/*.liquid',
    './snippets/*.liquid',
  ],
  theme: {
    screens: {
      sm: '320px',
      md: '750px',
      lg: '990px',
      xlg: '1440px',
      x2lg: '1920px',
      pageMaxWidth: '1440px',
    },
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        redhat: ['Red Hat Display'],
      },
      colors: {
        'core-white': '#ffffff',
        'core-black': '#000000',
        'brand-yellow': '#e2ad3b',
        'brand-grey': '#666768',
        'brand-midgrey': '#424242',
        'brand-darkgrey': '#3d3d3d',
        'brand-red': '#ce5756',
        'brand-blue': '#a0b7c4',
      },
    },
    color: {
      black: '#000000',
    },
  },
  plugins: [],
};
