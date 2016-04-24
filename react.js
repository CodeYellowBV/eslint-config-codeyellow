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
        // I want to use arrow functions in the `render` method.
        'react/jsx-no-bind': [2, { allowArrowFunctions: true }],
    }
};
