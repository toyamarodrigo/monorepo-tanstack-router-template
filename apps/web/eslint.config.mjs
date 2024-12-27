import createConfig from "@app/eslint-config/create-config";
import pluginQuery from "@tanstack/eslint-plugin-query";
import reactCompiler from "eslint-plugin-react-compiler";

export default createConfig({
  react: true,
}, {
  plugins: {
    "@tanstack/query": pluginQuery,
    "react-compiler": reactCompiler,
  },
  rules: {
    "react-compiler/react-compiler": "error",
    "react-refresh/only-export-components": "off",
    "react/no-prop-types": "off",
    "react-hooks/exhaustive-deps": "warn",
    "react-hooks/rules-of-hooks": "error",
    "antfu/top-level-function": "off",
    "@tanstack/query/exhaustive-deps": "error",
    "unicorn/filename-case": ["error", {
      case: "kebabCase",
      ignore: ["README.md", "~__root.tsx"],
    }],
    "no-unused-vars": ["warn", {
      args: "after-used",
      ignoreRestSiblings: false,
      argsIgnorePattern: "^_.*?$",
    }],
    "style/padding-line-between-statements": ["error", {
      blankLine: "always",
      prev: "*",
      next: "return",
    }, {
      blankLine: "always",
      prev: ["const", "let", "var"],
      next: "*",
    }, {
      blankLine: "any",
      prev: ["const", "let", "var"],
      next: ["const", "let", "var"],
    }],

  },
});
