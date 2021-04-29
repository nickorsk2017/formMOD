module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true // Allows for the parsing of JSX
    },

    project: 'tsconfig.json',
    tsconfigRootDir: '.',
    createDefaultProgram: true
  },
  plugins: ['@typescript-eslint', 'react', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier'
  ],
  settings: {
    react: {
      version: 'detect'
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.jpg']
      },
      typescript: {}
    }
  },

  rules: {
    '@typescript-eslint/class-name-casing': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'react/react-inß-jsx-scope': 0, // Means ignore
    'no-console': 0, // Means ignore
    'prettier/prettier': 2, // Means error,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    'react/prop-types': 0, // включить и пофиксить все ошибки
    '@typescript-eslint/no-unused-vars': 0, // включить и пофиксить все ошибки
    'react/display-name': 0, // включить и пофиксить все ошибки
    '@typescript-eslint/no-empty-function': 0, // включить и пофиксить все ошибки
    'react/no-string-refs': 0, // включить и пофиксить все ошибки
    'react/jsx-no-target-blank': 0, // включить и пофиксить все ошибки
    'react/jsx-key': 0, // включить и пофиксить все ошибки
    'react/no-find-dom-node': 0, // включить и пофиксить все ошибки
    '@typescript-eslint/no-var-requires': 0, // включить и пофиксить все ошибки
    '@typescript-eslint/ban-ts-comment': 0 // !!! включить и пофиксить все ошибки !!!
  }
};
