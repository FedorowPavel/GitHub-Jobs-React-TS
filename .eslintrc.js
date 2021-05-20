module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'airbnb/hooks'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx', 'd.ts'] }],
    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/ban-types': 0,
    radix: 0,
    'react/display-name': 0,
    '@typescript-eslint/no-inferrable-types': 0,
    '@typescript-eslint/ban-ts-comment': 0,
    'no-empty': 0,
    '@typescript-eslint/no-empty-interface': 0,
    'react/prop-types': 0,
    '@typescript-eslint/no-namespace': 'off',
    semi: [2, 'never'],
    'comma-dangle': ['error', {
      arrays: 'never',
      objects: 'never',
      imports: 'never',
      exports: 'never',
      functions: 'never'
    }],
    'max-len': ['error', {
      code: 140,
      tabWidth: 2,
      ignoreTrailingComments: true,
      ignoreComments: true,
      ignoreUrls: true,
      ignoreStrings: true
    }],
    indent: ['error', 2, {"ignoredNodes": ["JSXElement"]}],
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'func-names': 'off',
    'no-param-reassign': 'off',
    'no-mixed-spaces-and-tabs': 'error',
    '@typescript-eslint/no-explicit-any': 'off',
    'import/no-extraneous-dependencies': 'off',
    'react/require-default-props': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'react/jsx-props-no-spreading': 'off',
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-return-await': 'off',
    'import/named': 'off',
    camelcase: ['error', { ignoreDestructuring: true }],
    'prettier/prettier': 'off'
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'no-undef': 'off'
      }
    }
  ]
}
