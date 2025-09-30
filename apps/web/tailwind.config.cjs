/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,js,jsx}",
    "./apps/web/index.html",
    "./apps/web/src/**/*.{ts,tsx,js,jsx}"
  ],
  theme: {
    extend: {
      // ⚠️ on redéfinit 'navy' en clair pour éviter tout fond sombre restant
      colors: {
        navy: "#f8fafc", // anciennement #0f172a (bleu nuit) => fond clair uniforme
        accent: {
          cyan: "#22d3ee",
          violet: "#7c3aed",
        },
      },
      boxShadow: {
        // ombre plus douce pour le thème clair
        card: "0 8px 24px rgba(2, 6, 23, 0.06)",
      },
      fontFamily: {
        display: ["Poppins", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
