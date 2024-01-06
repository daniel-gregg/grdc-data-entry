/** @type {import('eslint').Linter.Config} */
module.exports = {
    root: true,
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
        warnOnUnsupportedTypeScriptVersion: true,
    },
    env: {
        browser: true,
        commonjs: true,
        es6: true,
    },
    parser: '@typescript-eslint/parser',
    plugins: ['import', '@typescript-eslint', 'jsx-a11y', 'prettier'],
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:react/jsx-runtime',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'plugin:jsx-a11y/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
        'prettier', // This must be last
    ],

    rules: {
        'no-console': 0,
        'prettier/prettier': 'warn',
        'jsx-a11y/anchor-is-valid': 'off',
        'react/function-component-definition': [
            'error',
            {
                namedComponents: 'function-declaration',
                unnamedComponents: 'function-expression',
            },
        ],
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/ban-types': ['warn'],
        '@typescript-eslint/no-unused-vars': [
            'error',
            { ignoreRestSiblings: true, argsIgnorePattern: '^_' },
        ],
        'import/order': [
            'error',
            {
                'newlines-between': 'never',
                alphabetize: { order: 'ignore' },
                groups: [
                    'builtin',
                    'external',
                    'internal',
                    ['parent', 'sibling', 'index'],
                    'unknown',
                ],
            },
        ],
    },
    settings: {
        react: {
            version: 'detect',
        },
        formComponents: ['Form'],
        linkComponents: [
            { name: 'Link', linkAttribute: 'to' },
            { name: 'NavLink', linkAttribute: 'to' },
        ],
        'import/internal-regex': '^~/',
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
            typescript: {
                alwaysTryTypes: true,
            },
        },
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/core-modules': ['react', 'react-dom', '@remix-run/*'],
    },
    overrides: [
        // Node
        {
            files: ['.eslintrc.js'],
            env: {
                node: true,
            },
        },
    ],
};
