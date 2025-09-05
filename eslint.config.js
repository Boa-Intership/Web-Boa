import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import prettier from 'eslint-plugin-prettier';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  globalIgnores(['dist', 'coverage']),
  {
    files: ['**/*.{ts,tsx,js,jsx}', 'src/__tests__/**/*.ts', 'src/__tests__/**/*.tsx'],
    ignores: ['node_modules', 'build', 'coverage'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
      globals: {
        ...globals.browser,
        describe: 'readonly',
        it: 'readonly',
        test: 'readonly',
        expect: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
      },
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      prettier,
      '@typescript-eslint': tseslint,
    },
    rules: {
      // Recomendados base
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...reactHooks.configs['recommended-latest'].rules,
      ...tseslint.configs.recommended.rules,

      // Prettier
      'prettier/prettier': 'error',

      // Buenas prácticas
      'no-unused-vars': ['warn', { varsIgnorePattern: '^[A-Z_]' }],
      '@typescript-eslint/no-unused-vars': ['warn', { varsIgnorePattern: '^[A-Z_]' }],
      '@typescript-eslint/no-explicit-any': 'warn',

      // React 18+ ya no requiere React en scope
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off', // usando TS, no PropTypes
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
]);
