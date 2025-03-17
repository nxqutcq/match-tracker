/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    screens: {
      xxs: { max: '320px' },
      xs: '320px',
      xs1: '375px',
      xs2: '400px',
      xs4: '425px',
      xs3: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1140px',
    },
    extend: {
      colors: {
        primaryBg: '#101318',
        textFaded: '#FAFAFA66',
        textHighlight: '#F2F6F6',
      },
    },
  },
  plugins: [],
}
