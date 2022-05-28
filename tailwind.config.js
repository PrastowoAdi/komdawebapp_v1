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
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        goyang: 'goyang 1s ease-in-out infinite',
      },
      keyframes: {
        goyang: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
      screens: {
        '2xl': '1320px'
      }
    },
  },
  plugins: [],
}
