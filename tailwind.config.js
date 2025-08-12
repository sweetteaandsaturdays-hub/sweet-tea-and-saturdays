/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'ui-serif', 'Georgia', 'serif'],
        sans: ['"Nunito Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        cream: "#F7F3EC",
        eucalyptus: "#BFC9BB",
        evergreen: "#4F6B4F",
        charcoal: "#2A2A2A",
        harvest: "#C99B55",
        cinnamon: "#B7562C",
      }
    },
  },
  plugins: [],
};
