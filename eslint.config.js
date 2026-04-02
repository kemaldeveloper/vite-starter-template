import js from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsparser from "@typescript-eslint/parser";
import prettierConfig from "eslint-config-prettier";
import htmlPlugin from "eslint-plugin-html";

export default [
  // Global ignores
  {
    ignores: ["node_modules/", "dist/", "build/", "coverage/", ".vite/", ".yarn/", "*.min.js", "*.min.css", "public/", ".env*"],
  },

  // Base JavaScript recommendations
  js.configs.recommended,

  // TypeScript files
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: "./tsconfig.json",
      },
      globals: {
        console: "readonly",
        document: "readonly",
        window: "readonly",
        navigator: "readonly",
      },
    },
    plugins: {
      "@typescript-eslint": tseslint,
    },
    rules: {
      // TypeScript specific rules
      "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-non-null-assertion": "warn",

      // Explicit typing rules
      "@typescript-eslint/explicit-function-return-type": [
        "error",
        {
          allowExpressions: true, // allow arrow functions without return type
          allowTypedFunctionExpressions: true,
          allowHigherOrderFunctions: true,
          allowDirectConstAssertionInArrowFunctions: true,
        },
      ],
      "@typescript-eslint/explicit-module-boundary-types": "error",
      "@typescript-eslint/no-inferrable-types": "off", // allow explicit types even when inferrable
      "@typescript-eslint/typedef": [
        "error",
        {
          arrayDestructuring: false,
          arrowParameter: true,
          memberVariableDeclaration: true,
          objectDestructuring: false,
          parameter: true,
          propertyDeclaration: true,
          variableDeclaration: false, // let TypeScript infer simple variable types
          variableDeclarationIgnoreFunction: true,
        },
      ],

      // General code quality
      "no-console": "off",
      "no-debugger": "error",
      "no-alert": "error",
      "prefer-const": "error",
      "no-var": "error",
      "object-shorthand": "error",
      "prefer-template": "error",
    },
  },

  // HTML files with embedded scripts
  {
    files: ["**/*.html"],
    plugins: {
      html: htmlPlugin,
    },
    rules: {
      // Relax some rules for HTML embedded scripts
      "no-console": "off",
      "@typescript-eslint/no-unused-vars": "off",
    },
  },

  // JavaScript files (if any)
  {
    files: ["**/*.js", "**/*.mjs"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        console: "readonly",
        document: "readonly",
        window: "readonly",
      },
    },
    rules: {
      "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
      "no-console": "warn",
      "prefer-const": "error",
      "no-var": "error",
    },
  },

  // Configuration files
  {
    files: ["*.config.js", "*.config.ts", "*.config.mjs"],
    languageOptions: {
      globals: {
        console: "readonly",
        process: "readonly",
        Buffer: "readonly",
        __dirname: "readonly",
        __filename: "readonly",
      },
    },
    rules: {
      "no-console": "off",
      "no-undef": "off",
    },
  },

  // Prettier compatibility (must be last)
  prettierConfig,
];
