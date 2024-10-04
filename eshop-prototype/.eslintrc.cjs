module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['eslint:recommended', 'plugin:react/recommended'],
    overrides: [
        {
            env: {
                node: true,
            },
            files: ['.eslintrc.{js,cjs}'],
            parserOptions: {
                sourceType: 'script',
            },
        },
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react'],
    rules: {
        indent: ['error', 4],
        'linebreak-style': 0,
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        'no-constructor-return': 'warn',
        'no-use-before-define': 'warn',
        eqeqeq: 'warn',
        camelcase: 'warn',
        'no-multi-str': 'warn',
    },
};