// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  bail: true,
  clearMocks: true,
  coverageDirectory: '__tests__/coverage',
  setupFilesAfterEnv: ['dotenv-flow/config'],
  testEnvironment: 'node',
  testMatch: ['**/__tests__/**/*.test.js?(x)'],
  preset: '@shelf/jest-mongodb'
};
