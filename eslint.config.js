module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "airbnb",
    "airbnb-typescript",
    "prettier",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs", "node_modules"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname,
  },
  plugins: ["react", "@typescript-eslint", "prettier"],
  rules: {
    "prettier/prettier": "error", // Prettier 오류를 ESLint에 표시
    "linebreak-style": 0,
    quotes: ["error", "single"],
    "@typescript-eslint/quotes": ["error", "single"],
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "warn",
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": "warn",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        ts: "never",
        tsx: "never",
        js: "never",
        jsx: "never",
      },
    ],
    "react/react-in-jsx-scope": "off", // Next.js, Vite 사용 시 필요 없음
    "react/jsx-filename-extension": [1, { extensions: [".tsx"] }], // .tsx 허용
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
};
