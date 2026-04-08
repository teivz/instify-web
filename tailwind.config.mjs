/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'sans-serif'],
      },
      colors: {
        accent:  '#3B82F6',
        page:    'var(--page)',
        surface: 'var(--surface)',
        panel:   'var(--panel)',
        edge:    'var(--edge)',
        prose:   'var(--prose)',
        dim:     'var(--dim)',
        muted:   'var(--muted)',
      },
    },
  },
}
