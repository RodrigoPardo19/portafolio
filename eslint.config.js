import eslintJs from "@eslint/js";
import astroPlugin from "eslint-plugin-astro";
import astroParser from "astro-eslint-parser";
import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import jsxA11yPlugin from "eslint-plugin-jsx-a11y";
import eslintConfigPrettier from "eslint-config-prettier";
// Para `eslint-plugin-prettier` (opcional, si quieres que Prettier se ejecute como regla de ESLint)
import prettierPlugin from "eslint-plugin-prettier";
// import prettierRecommended from "eslint-plugin-prettier/recommended"; // Si usas esto, no necesitas eslintConfigPrettier explícitamente al final

import globals from "globals";
import { globalIgnores } from "eslint/config";

export default [
  globalIgnores(["node_modules/*", ".astro/*", ".git/*"]),
  // Configuración global base de ESLint
  eslintJs.configs.recommended,
  // Configuración para archivos .astro
  {
    files: ["**/*.astro"],
    plugins: {
      astro: astroPlugin,
    },
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        parser: tsParser, // Parser para la sección <script> de Astro y expresiones
        extraFileExtensions: [".astro"],
      },
      globals: {
        ...globals.browser,
        ...globals.node, // O los específicos de Astro si los tienes
        Astro: "readonly", // Ejemplo de global de Astro
        Fragment: "readonly", // Ejemplo
      },
    },
    rules: {
      ...astroPlugin.configs.recommended.rules, // Reglas recomendadas para Astro
      ...astroPlugin.configs["jsx-a11y-recommended"].rules, // Reglas de a11y para Astro
      // Aquí puedes sobrescribir o añadir reglas específicas para archivos .astro
      // Ejemplo: 'astro/no-set-html-directive': 'error'
      // Si usas eslint-plugin-prettier, añade esto:
      "prettier/prettier": "error",
    },
  },

  // Configuración para archivos .ts y .tsx
  {
    files: ["**/*.ts", "**/*.tsx"],
    plugins: {
      "@typescript-eslint": tsPlugin,
      "jsx-a11y": jsxA11yPlugin, // Necesario para reglas jsx-a11y en .tsx
    },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        project: "./tsconfig.json", // Opcional: para reglas que requieren información de tipo
      },
      globals: {
        ...globals.browser,
        ...globals.es2022,
        ...globals.node,
      },
    },
    rules: {
      ...tsPlugin.configs.recommended.rules,
      // ...tsPlugin.configs["recommended-requiring-type-checking"].rules, // Si tienes `project` en parserOptions
      ...jsxA11yPlugin.configs.recommended.rules, // Para archivos .tsx
      // Reglas específicas para TS/TSX
      // Ejemplo: '@typescript-eslint/explicit-function-return-type': 'off'
      // Si usas eslint-plugin-prettier, añade esto:
      // "prettier/prettier": "error",
    },
    settings: {
      // settings sigue siendo válido dentro de un objeto de configuración
      "jsx-a11y": {
        components: {
          // Mapea componentes personalizados a elementos HTML para el linter de a11y
          // Ejemplo: "Link": "a"
        },
      },
    },
  },

  // Configuración para archivos .js (si es necesario, ajusta según tus necesidades)
  {
    files: ["**/*.js", "**/*.cjs", "**/*.mjs"], // Incluye .cjs y .mjs
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2022,
      },
    },
    rules: {
      // Reglas específicas para JS si es necesario
      // Si usas eslint-plugin-prettier, añade esto:
      // "prettier/prettier": "error",
    },
  },

  // Configuración de Prettier
  // Debe ser el ÚLTIMO elemento del array para anular reglas de otros configs.
  eslintConfigPrettier,

  // Si prefieres integrar eslint-plugin-prettier para que los problemas de formato
  // se reporten como errores de ESLint (esto puede ser redundante si tu editor ya lo hace
  // o si ejecutas Prettier por separado):
  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      "prettier/prettier": "error",
      "arrow-body-style": "off", // Ejemplo de regla que puede entrar en conflicto
      "prefer-arrow-callback": "off", // Ejemplo de regla que puede entrar en conflicto
    },
  },
  // O usa su configuración recomendada:
  // prettierRecommended,
];
