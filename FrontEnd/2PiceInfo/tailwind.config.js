/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      display: ["Montserrat"],
      body: ["Montserrat"],
    },
    extend: {
      backgroundImage: {
        "babackground-img": "url('../assets/Background.jpg')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
    },
  },
  plugins: [],
};
