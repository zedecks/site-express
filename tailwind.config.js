/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#2563EB',
          blueHover: '#1D4ED8',
          dark: '#0F172A',
          darker: '#080D1A',
          light: '#F8FAFC',
          slate: '#F1F5F9',
          green: '#25D366',
          greenHover: '#20BA5A'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif']
      },
      boxShadow: {
        'subtle': '0 4px 20px -2px rgba(15, 23, 42, 0.06)',
        'card-hover': '0 12px 28px -4px rgba(37, 99, 235, 0.12)',
        'glow-blue': '0 0 30px -5px rgba(37, 99, 235, 0.35)',
        'glow-green': '0 0 25px -3px rgba(37, 211, 102, 0.45)'
      }
    }
  },
  plugins: []
}
