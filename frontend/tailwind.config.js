/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "var(--main-color)",
        "grey-bg": "var(--grey-bg)",
        "grey-text": "var(--grey-text)",
        white: "var(--white)",
        black: "var(--black)",
      },
      fontFamily: {
        main: ['var(--main-font)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
