import eslintPluginAstro from "eslint-plugin-astro";
import tseslint from "typescript-eslint";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import jsxA11y from "eslint-plugin-jsx-a11y";

export default [
  // Global ignores
  {
    ignores: ["dist", "node_modules", ".astro", ".vercel"],
  },

  // TypeScript recommended configs
  ...tseslint.configs.recommended,

  // Astro recommended configs
  ...eslintPluginAstro.configs.recommended,

  // React specific configuration
  {
    files: ["**/*.{ts,tsx,astro}"],
    plugins: {
      react,
      "react-hooks": reactHooks,
      "jsx-a11y": jsxA11y,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      // React 17+ doesn't need React in scope
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",

      // Standard recommended rules applied manually since plugins might not fully support flat config spread yet for all
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "react/prop-types": "off",

      // Custom adjustments
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],
    },
  },

  // Override specifically for .astro files
  {
    files: ["*.astro"],
    rules: {
      // Astro handles its own component imports
      "react/no-unknown-property": "off",
      "react/jsx-key": "off",
      "react-hooks/rules-of-hooks": "off",
    },
  },
];
