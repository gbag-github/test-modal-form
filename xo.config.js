
const config = {
  overridesFiles: ['__mocks__/**'],
  otherOverrides: [
    { files: 'src/services/**', rules: { 'no-case-declarations': 'off' } },
    {
      files: 'src/**',
      rules: {
        'unicorn/prevent-abbreviations': 'off',
        'unicorn/no-array-reduce': 'off',
        '@typescript-eslint/no-dynamic-delete': 'off',
        '@typescript-eslint/no-confusing-void-expression': 'off',
        '@typescript-eslint/no-implicit-any-catch': 'off',
        'react/jsx-no-bind': 'off',
        '@typescript-eslint/prefer-nullish-coalescing': 'off',
        'sort-imports': [
          'warn',
          {
            ignoreCase: true,
            ignoreDeclarationSort: false,
            ignoreMemberSort: false,
            memberSyntaxSortOrder: ['none', 'single', 'multiple', 'all'],
            allowSeparatedGroups: true
          }
        ]
      }
    },
    {
      files: 'src/components/Input/index.js',
      rules: {
        'jsx-a11y/label-has-associated-control': [
          2,
          {
            controlComponents: ['InputText', 'InputSelect', 'InputCheckbox'],
            depth: 3
          }
        ]
      }
    },
    {
      files: 'config/jest/extends.js',
      rules: { 'import/no-unassigned-import': 'off' }
    },
    {
      files: ['src/**/*.ts', 'src/**/*.tsx'],
      rules: { 'react/prop-types': 'off', 'max-nested-callbacks': 'off' }
    },
    {
      files: ['src/schema/**', 'src/**/schema.ts', 'src/**/schema.js'],
      rules: { 'no-template-curly-in-string': 'off' }
    },
    { files: 'src/**/redux.ts', rules: { '@typescript-eslint/default-param-last': 'off' } },
    { files: 'src/**/reducers.ts', rules: { '@typescript-eslint/default-param-last': 'off' } },
    { files: 'src/util/mockDate/index.ts', rules: { 'no-constructor-return': 'off' } },
    { files: 'src/util/mockDate/index.ts', rules: { 'no-constructor-return': 'off' } },
    {
      files: ['src/**/*.stories.tsx'],
      rules: { 'import/no-anonymous-default-export': 'off' }
    },
    {
      files: ['**/*.tsx'], // Disable required proptypes for tsx components since ts will handle it
      rules: { 'react/default-props-match-prop-types': 'off' }
    },
    { files: 'e2e/support/index.ts', rules: { 'import/no-unassigned-import': 'off' } }
  ],
  ignores: [
    'src/locales/_build/',
    'src/locales/**/*.js',
    'src/util/idg',
    'src/scripts/ckart.js',
    '**/__generated__/**',
    '**/*.generated.*'
  ]
};

module.exports = {
  ...config,
  globals: ['d3'],
  // Override babel parser with typescript-eslint
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ...config.parserOptions,
    project: ['tsconfig.json', './e2e/tsconfig.json']
  }
};
