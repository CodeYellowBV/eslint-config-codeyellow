module.exports = {
    rules: {
        // At Code Yellow we use 4 spaces everywhere (if possible)
        'indent': [2, 4, { 'SwitchCase': 1 }],
        // TODO: We should really set a max line length at ~ 120 (needs discussion)
        'max-len': 0,
        // TODO: Disallow anonymous functions (needs discussion)
        'func-names': 0,
        // We use confirm as a poor-man's modal
        'no-alert': 0,
        // Logging to console is not bad per definition; it can provide helpful information
        'no-console': 0,
        // TODO: We're doing param reassign all the time, but should we? (needs discussion)
        'no-param-reassign': 0,
        // In tests unused expressions are required (e.g. `expect(true).to.be.ok`)
        'no-unused-expressions': 0,
        // Disallow using `parseInt(x, 10)` when you should use `parseInt(x)`.
        // We only support ES5 compliant browsers so this is safe.
        'radix': [2, 'as-needed'],
        // Detecting unresolvable paths is too tricky for now; it would need to parse the webpack file.
        'import/no-unresolved': 0,
        // See above.
        'import/no-extraneous-dependencies': 0,
        // Removed `absolute-first` from this rule, which forced absolute imports to be first. This is way too strict.
        'import/imports-first': [2],
        // `(a) => 1 ? 2 : 3;` is not confusing at all?
        'no-confusing-arrow': 0,
        // The underscore prefix is used especially in Backbone to identify a model attribute as frontend only.
        'no-underscore-dangle': 0,
        // Using `() => { return foo; }` can save a lot of time because it allows multiple lines.
        'arrow-body-style': [0],
    },
};
