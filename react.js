module.exports = {
    extends: [
        'eslint-config-airbnb-base',
        'eslint-config-airbnb-base/rules/strict',
        'eslint-config-airbnb/rules/react',
        'eslint-config-airbnb/rules/react-a11y',
        'eslint-config-codeyellow/rules/base',
    ].map(require.resolve),
    rules: {
        // Force to 4 spaces
        'react/jsx-indent-props': [2, 4],
        'react/jsx-indent': [2, 4],
        // I want to use arrow functions in the `render` method.
        'react/jsx-no-bind': [2, { allowArrowFunctions: true }],
        'react/jsx-filename-extension': [1, { 'extensions': ['.js'] }],
        // Airbnb also forbids `object` and `array`, but we have use cases where we "need" to be this vague.
        'react/forbid-prop-types': [2, { forbid: ['any'] }],
        // Fails when you use <label><input type="radio" /></label>, so quite worthless...
        'jsx-a11y/label-has-for': 0,
    },
    env: {
        browser: true,
    },
};
