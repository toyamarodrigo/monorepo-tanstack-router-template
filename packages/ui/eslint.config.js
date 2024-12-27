import createConfig from "@app/eslint-config/create-config";

export default createConfig({
  react: true,
  rules: {
    "react-refresh/only-export-components": "off",
    "react/no-prop-types": "off",
    "react-hooks/exhaustive-deps": "warn",
    "react-hooks/rules-of-hooks": "error",
  },
  languageOptions: {
    globals: {
      ServiceWorker: true,
      Window: true,
      WindowOrWorkerGlobalScope: true,
    },
  },
});
