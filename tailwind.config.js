/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary': '#C92071',
        'secondary': '#B5B6F2',
        'tertiary': '#991956',
        'error': '#EE4266',
        'success': '#52CA76',
        'warning': '#F6AA1C',
      },
    },
  },
  plugins: [],
}

