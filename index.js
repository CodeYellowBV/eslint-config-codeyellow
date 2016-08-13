module.exports = {
    extends: [
        'eslint-config-airbnb-base',
        'eslint-config-airbnb-base/rules/strict',
        'eslint-config-codeyellow/rules/base',
    ].map(require.resolve),
    rules: {},
    env: {
        browser: true,
        node: true,
    },
};
