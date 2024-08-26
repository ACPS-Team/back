module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier'
  ],
  plugins: [
    '@typescript-eslint/eslint-plugin',
    'unused-imports',
    'simple-import-sort',
    'prettier'
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        semi: false,
        singleQuote: true,
        printWidth: 100,
        trailingComma: 'none',
        arrowParens: 'avoid',
        endOfLine: 'auto',
      },
    ],
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'no-await-in-loop': 'warn',
    'no-eval': 'error',
    'no-implied-eval': 'error',
    'prefer-promise-reject-errors': 'warn',
    'no-console': 'warn',
    'simple-import-sort/imports': 'error',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_'
      }
    ],
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/type-annotation-spacing': [
      'warn',
      {
        after: true
      }
    ],
    'unused-imports/no-unused-imports': 'error',
    'import/no-unresolved': 'off',
    'import/no-relative-parent-imports': 'off',
    // originals
    'comma-spacing': 'warn',
    quotes: ['warn', 'single'],
    'key-spacing': [
      'error',
      {
        beforeColon: false,
        afterColon: true
      }
    ],
    'no-unused-vars': [
      'off'
    ],
    'no-inner-declarations': 'off',
    'no-multiple-empty-lines': [
      'error',
      {
        'max': 2,
        'maxEOF': 1,
        'maxBOF': 0
      }
    ],
    'no-trailing-spaces': 'warn',
    'object-curly-spacing': [
      'warn',
      'always'
    ],
    'array-bracket-spacing': [
      'warn',
      'never'
    ],
    'space-before-blocks': 'warn',
    'space-infix-ops': 'warn',
    'space-before-function-paren': [
      'warn',
      {
        'anonymous': 'always',
        'named': 'never',
        'asyncArrow': 'always'
      }
    ],
    'padded-blocks': [
      'warn',
      'never'
    ],
    'eol-last': [
      'warn',
      'always'
    ],
    'keyword-spacing': [
      'warn',
      {
        'before': true,
        'after': true
      }
    ],
    'arrow-spacing': 'warn',
    'id-denylist': [
      'warn',
      'require'
    ],
    'space-in-parens': [
      'warn',
      'never'
    ]
  },
  overrides: [
    {
      'files': ['*.ts'],
      'rules': {
        'simple-import-sort/imports': [
          'error',
          {
            'groups': [
              ['^(@nestjs)(/.*|$)', '^@?\\w'],
              ["^(@infrastructure)(/.*|$)"],
              ['^(@modules)(/.*|$)'],
              ['^(@common)(/.*|$)'],
              ['^(@utils)(/.*|$)'],
              ['^(@decorators)(/.*|$)'],
            ]
          }
        ]
      },
    },
    {
      "files": ["src/generated/**/*.{ts,tsx}"],
      "rules": {
        "@typescript-eslint/no-namespace": "off"
      }
    }
  ]
};
