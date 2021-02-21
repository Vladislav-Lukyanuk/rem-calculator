module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "google",
    //    "plugin:react/recommended",
    //    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:prettier/recommended",
    "prettier",
    "prettier/react",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "prettier"],
  rules: {
    "require-jsdoc": "off",
    "@typescript-eslint/ban-ts-comment": "off",
  },
  settings: {
    "import/resolver": {
      node: {
        paths: ["src"],
      },
    },
  },
};
