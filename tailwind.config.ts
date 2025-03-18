import { Config } from 'tailwindcss';

const config: Config = {
  theme: {
    extend: {
      fontFamily: {
        antonio: ['Antonio', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      fontWeight: {
        light: 200,
        normal: 400,
        bold: 700,
      },
      colors: {
        'dark-brown': 'var(--dark-brown)',
        'middle-brown': 'var(--middle-brown)',
        'light-brown': 'var(--light-brown)',
        red: 'var(--red)',
        milk: 'var(--milk)',
        black: 'var(--black)',
      },
    },
  },
  plugins: [],
};

export default config;
