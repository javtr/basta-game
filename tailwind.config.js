// tailwind.config.js
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#3b82f6', // Azul claro
          DEFAULT: '#1d4ed8', // Azul oscuro
          dark: '#1e40af', // Azul más oscuro
        },
        secondary: {
          light: '#10b981', // Verde claro
          DEFAULT: '#059669', // Verde oscuro
          dark: '#047857', // Verde más oscuro
        },
      },
    },
  },
  plugins: [],
}
