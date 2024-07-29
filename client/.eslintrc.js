module.exports = {
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    // Add your custom ESLint rules here
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'next',
    'next/core-web-vitals',
    'prettier',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
};
