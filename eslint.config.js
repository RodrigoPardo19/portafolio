import astroPlugin from "eslint-plugin-astro";
import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import prettierRecommended from "eslint-plugin-prettier/recommended";

import { globalIgnores } from "eslint/config";

export default [
  globalIgnores(["node_modules/*", ".astro/*", ".git/*"]),
  ...astroPlugin.configs.recommended,
  {
    files: ["**/*.ts", "**/*.tsx"],
    plugins: {
      "@typescript-eslint": tsPlugin,
    },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        project: "./tsconfig.json",
      },
    },
    rules: {
      ...tsPlugin.configs.recommended.rules,
    },
  },
  prettierRecommended,
];
