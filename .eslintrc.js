module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],

    overrides: [],

    parser: '@typescript-eslint/parser',

    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    
    plugins: ['@typescript-eslint'],
   
    rules: {
        indent: ['error', 4],
        'linebreak-style': ['error', 'windows'],
        quotes: ['error', 'single'],
        semi: [
            'error',
            'always',
        ],
        'no-extra-semi': ['error'],
        'semi-spacing': ['error'],
        'quote-props': ['error', 'as-needed'],
        'array-bracket-spacing': ['error', 'never'],
        camelcase: [
            'error',
            {
                properties: 'always',
            },
        ],
        'object-curly-spacing': ['error', 'always'],
        'no-duplicate-imports': ['error', { includeExports: true }],
        'comma-spacing': [
            'error',
            {
                before: false,
                after: true,
            },
        ],
        'no-obj-calls': 'error',
        'arrow-body-style': ['error', 'as-needed'],
        'capitalized-comments': ['error', 'always'],
        'max-depth': ['error', 4],
        'max-params': ['error', 3],
        'no-bitwise': ['error', { allow: ['~'] }],
        'no-else-return': ['error', { allowElseIf: false }],
        'sort-imports': ['error', { allowSeparatedGroups: true }],
        'array-bracket-newline': ['error', 'consistent'],
        'arrow-parens': ['error', 'as-needed'],
        'block-spacing': 'error',
        'brace-style': 'error',
        'comma-dangle': ['error', 'always-multiline'],
        'func-call-spacing': ['error', 'never'],
        'padding-line-between-statements': [
            'error',
            { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
            {
                blankLine: 'any',
                prev: ['const', 'let', 'var'],
                next: ['const', 'let', 'var'],
            },
        ],
        'space-in-parens': ['error', 'never'],
        'space-before-blocks': ['error', 'never'],
        'no-var': 'error',
    },
};
