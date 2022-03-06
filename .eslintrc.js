module.exports = {
  extends: ["eslint:recommended"],
  env: {
    node: true,
    es2022: true,
  },
  overrides: [
    {
      files: ["src/__tests__/*.test.js", "src/__suites__/*.suite.js"],
      env: {
        jest: true,
      },
    },
  ],
};
