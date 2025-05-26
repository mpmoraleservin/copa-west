import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bluePurple: '#3C4297',
        deepNavy: '#1E2A66',
        classicOrange: '#EC5B36',
        softOrange: '#F2825E',
        softPink: '#FDEAE4'
      },
      fontFamily: {
        heading: ['Outright', 'sans-serif'],
        body: ['Oswald', 'sans-serif']
      }
    }
  },
  plugins: []
};

export default config;