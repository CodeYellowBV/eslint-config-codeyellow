module.exports = {
    extends: [
        'eslint-config-airbnb-base',
        'eslint-config-airbnb-base/rules/strict',
        'eslint-config-airbnb/rules/react',
        'eslint-config-airbnb/rules/react-a11y',
        'eslint-config-codeyellow/rules/base',
    ].map(require.resolve),
    // The only reason we need babel-eslint is because the default parser doesn't support decorators.
    // As soon as the default parser supports this, please remove babel-eslint.
    parser: 'babel-eslint',
    rules: {
        // Force to 4 spaces
        'react/jsx-indent-props': [2, 4],
        'react/jsx-indent': [2, 4],
        'react/jsx-filename-extension': [1, { 'extensions': ['.js'] }],
        // Airbnb also forbids `object` and `array`, but we have use cases where we "need" to be this vague.
        'react/forbid-prop-types': [2, { forbid: ['any'] }],
        // Fails when you use <label><input type="radio" /></label>, so quite worthless...
        'jsx-a11y/label-has-for': 0,
        // Stateless functions are better, but when developing you often don't know yet if it's going to have a state.
        // Refactoring between stateless and stateful every time costs too much time.
        'react/prefer-stateless-function': 0,
        // Airbnb requires comma dangles for functions, which is an ES2017 feature. We are not mentally ready for that yet.
        'comma-dangle': ['error', {
            arrays: 'always-multiline',
            objects: 'always-multiline',
            imports: 'always-multiline',
            exports: 'always-multiline',
            functions: 'ignore',
        }],
    },
    env: {
        browser: true,
    },
};
