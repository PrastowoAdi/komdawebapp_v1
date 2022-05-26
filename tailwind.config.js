module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    container : {
      center: true,
      padding: '16px',
    },
    extend: {
      backgroundImage: {
        'feedback': "url('/img/feedback.png')",
        'hero-tentang' : "url('/img/hero-tentang.png')",
        'logo-komda' : "url('/img/header-bg.png')",
      },
      colors: {
        primary: '#e11d48',
        secondary: '#64748b',
        dark: '#0f172a',
      },
      screens: {
        '2xl': '1320px'
      }
    },
  },
  plugins: [],
}
