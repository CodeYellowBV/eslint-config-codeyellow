module.exports = {
    extends: [
        'eslint-config-airbnb/base',
        'eslint-config-airbnb/rules/strict',
    ].map(require.resolve),
    rules: {
        // At Code Yellow we use 4 spaces everywhere (if possible)
        'indent': [2, 4, { 'SwitchCase': 1 }],
        // This would be very verbose; a newline should only be necessary if the line is too long
        'newline-per-chained-call': 0,
        // TODO: We should really set a max line length at ~ 120 (needs discussion)
        'max-len': 0,
        // TODO: Disallow anonymous functions (needs discussion)
        'func-names': 0,
        // We use confirm as a poor-man's modal
        'no-alert': 0,
        // Logging to console is not bad per definition; it can provide helpful information
        'no-console': 0,
        // This conflicts with arrow-body-style, which requires you to use arrow functions
        'no-confusing-arrow': 0,
        // TODO: We're doing param reassign all the time, but should we? (needs discussion)
        'no-param-reassign': 0,
        // In tests unused expressions are required (e.g. `expect(true).to.be.ok`)
        'no-unused-expressions': 0,
        // Disallow using `parseInt(x, 10)` when you should use `parseInt(x)`.
        // We only support ES5 compliant browsers so this is safe.
        'radix': [2, 'as-needed'],
    },
};
