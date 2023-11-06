const chuhoman = require('@chuhoman/eslint-config').default;

module.exports = chuhoman(
  {},
  {
    rules: {
      'no-console': 0,
      'prefer-regex-literals': 0,
      '@typescript-eslint/consistent-type-assertions': 0,
    },
  },
);
