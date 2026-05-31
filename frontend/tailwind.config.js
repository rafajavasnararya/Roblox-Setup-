module.exports = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'neon-purple': '#a855f7',
        'neon-purple-dark': '#7e22ce',
        'dark-bg': '#0f0f0f',
        'dark-card': '#1a1a1a',
      },
      backgroundImage: {
        'gradient-neon': 'linear-gradient(135deg, #a855f7 0%, #7e22ce 100%)',
        'gradient-dark': 'linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%)',
      },
    },
  },
  plugins: [],
};
