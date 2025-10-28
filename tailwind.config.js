/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  theme: {
    extend: {
      colors: {
        open: '#22c55e',
        in_progress: '#f59e0b',
        closed: '#6b7280',
      },
            keyframes: {
        waveMotion: {
          '0%': { transform: 'translateY(0) scaleY(1)' },
          '50%': { transform: 'translateY(12px) scaleY(1.03)' },
          '100%': { transform: 'translateY(0) scaleY(1)' }
        }
      },
      animation: {
        waveMotion: 'waveMotion 3s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}