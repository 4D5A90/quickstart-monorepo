const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

/** @type {import("eslint").Linter.Config} */
module.exports = {
    parser: "@typescript-eslint/parser",
    extends: ["plugin:prettier/recommended", "eslint:recommended", "prettier"],
    plugins: ["@typescript-eslint", "prettier"],
    settings: {
      "import/resolver": {
        typescript: {
          project,
        },
      },
    },
    env: {
      es6: true,
      node: true,
      es2021: true,
    },
    rules: {
      "no-var": "error",
      semi: "error",
      indent: ["error", 2, { SwitchCase: 1 }],
      "no-multi-spaces": "error",
      "space-in-parens": "error",
      "no-multiple-empty-lines": "error",
      "prefer-const": "error",
      "no-unused-vars": "warn",
    },
    overrides: [
      {
        files: ["*.js"],
        parser: "@babel/eslint-parser",
        parserOptions: {
          requireConfigFile: false,
        },
        env: {
          browser: true,
          jest: true,
          node: true,
        },
      },
    ],
  };