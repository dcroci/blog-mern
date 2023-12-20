/** @type {import('tailwindcss').Config} */
import animatedPlugin from 'tailwindcss-animated';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [animatedPlugin],
};
