/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
     fontFamily: {
        josefin: ['JosefinSans-Regular', 'sans-serif'],
        josefinThin: ['JosefinSans-Thin', 'sans-serif'],
        josefinLight: ['JosefinSans-Light', 'sans-serif'],
        roboto: ['Roboto-Regular', 'sans-serif'],
        robotoMedium: ['Roboto-Medium', 'sans-serif'],
        robotoLight: ['Roboto-Light', 'sans-serif'],
      },
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        yellow: 'var(--yellow)',
      },
    },
  },
  plugins: [],
}

