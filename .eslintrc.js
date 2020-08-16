const path = require('path')

module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:testing-library/recommended',
    'plugin:jest/recommended',
  ],
  settings: {
    'import/resolver': 'node',
    react: {
      createClass: 'createReactClass',
      pragma: 'React',
      version: 'detect',
    },
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
    allowImportExportEverywhere: true,
  },
  plugins: ['react', 'jest', 'testing-library', 'jest-dom'],
  rules: {},
  overrides: [
    {
      files: ['**/src/**'],
      settings: { 'import/resolver': 'webpack' },
    },
    {
      files: ['**/__tests__/**'],
      settings: {
        'import/resolver': {
          jest: {
            jestConfigFile: path.join(__dirname, './jest.config.js'),
          },
        },
      },
    },
  ],
}
