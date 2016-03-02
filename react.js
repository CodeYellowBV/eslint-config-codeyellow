module.exports = {
    extends: [
        'eslint-config-airbnb/base',
        'eslint-config-airbnb/rules/strict',
        'eslint-config-airbnb/rules/react',
        'eslint-config-codeyellow/rules/base',
    ].map(require.resolve),
    rules: {}
};
