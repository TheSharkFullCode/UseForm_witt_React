/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'h1': '4rem', // Tamaño de fuente personalizado para h1
      },
      backgroundColor: {
        'primary': '#FF0000', // Color de fondo personalizado para botones primarios
      },
      textColor: {
        'primary': '#FFFFFF', // Color de texto personalizado para botones primarios
      },
      padding: {
        'button': '1rem 2rem', // Espaciado personalizado para botones
      },
    },
  },
  plugins: [],
}