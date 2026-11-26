 export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        tinta: "#0A0A0F",
        fondo: "#F1F8FD",
        suave: "#E0F1FA",
        borde: "#CFE3F0",
        celeste: "#0B8FCB",
        rosa: "#D61F7A",
        dorado: "#B8860B",
      },
      fontFamily: {
        display: ["Syne", "sans-serif"],
        sans: ["Manrope", "system-ui", "sans-serif"],
        mono: ['"DM Mono"', "monospace"],
      },
    },
  },
  plugins: [],
};