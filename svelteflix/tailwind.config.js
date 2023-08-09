/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        accent: 'hsl(1, 59%, 50%)',
      },
      padding: {
       'side' : 'var(--side)',
      },
      maxWidth: {
       'col' : 'var(--col)',
      }
    },
  },
  plugins: [],
}

