// .prettierrc.js (o prettier.config.js)

// Importa los plugins si es necesario (aunque para prettier-plugin-astro,
// a menudo solo con listarlo en el array de plugins es suficiente si está instalado globalmente
// o localmente y Prettier lo puede encontrar. Si es un plugin local que necesita ser
// resuelto explícitamente, podrías necesitar importarlo, pero usualmente no es así
// para los plugins estándar de Prettier).

// prettier-plugin-astro generalmente se descubre automáticamente si está en node_modules.
// No necesitas importarlo explícitamente aquí a menos que haya un caso muy específico.

export default {
  plugins: ["prettier-plugin-astro"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro", // Usa el parser de Astro para estos archivos
      },
    },
    {
      files: "*.{js,jsx,ts,tsx}",
      options: {
        parser: "typescript", // Parser para JS/TS/JSX/TSX
      },
    },
  ],
  printWidth: 100,
  // Aquí puedes añadir el resto de tus opciones de Prettier
  // Por ejemplo:
  // tabWidth: 2,
  // useTabs: false,
  // semi: true,
  // singleQuote: false, // O true, según tu preferencia
  // trailingComma: "es5",
  // bracketSpacing: true,
  // arrowParens: "always",
  // endOfLine: "lf",
};
