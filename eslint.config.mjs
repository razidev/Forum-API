import globals from 'globals';
import pluginJs from '@eslint/js';


export default [
  {files: ['**/*.js'], languageOptions: {sourceType: 'commonjs'}},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  {
    rules: {
      'no-unused-vars': 'warn',
      'no-undef': 'warn',
      'no-console': 'warn',
      'linebreak-style': 'off',
      'no-const-assign': 'error',
      'indent': ['error', 2],
      'no-param-reassign': [
        'error',
        {
          'props': false
        }
      ],
      'semi': ['error', 'always'],
      'quotes': ['error', 'single']
    }
  },
];