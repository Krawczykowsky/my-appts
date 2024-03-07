module.exports = {
    env: {
      browser: true,
      es2021: true,
      node: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react-hooks/recommended',
      'plugin:prettier/recommended',
      'prettier',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 2023,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
    },
    plugins: ['react', '@typescript-eslint', 'react-hooks'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off', //Not sure for this but for example catch needs any type instead of Error type. TODO: Find a solution
      'no-unused-vars': 'off', // This will handled by the next line(Typescript)
      '@typescript-eslint/no-unused-vars': ['error'],
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'classProperty',
          modifiers: ['private'],
          format: ['camelCase'],
          leadingUnderscore: 'require',
        },
        {
          selector: 'class',
          format: ['PascalCase'],
        },
      ],
    },
    settings: {
      react: {
        version: 'detect', // Automatically detect the React version
      },
    },
  };
  