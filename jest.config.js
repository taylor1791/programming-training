const includeSuites = !!process.env.INCLUDE_SUITES;

module.exports = {
  testMatch: [includeSuites ? "**/__(tests|suites)__/**/*.js" : "**/__tests__/**/*.js"],
};
