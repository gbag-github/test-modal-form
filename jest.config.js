module.exports = {
  automock: false,
  coveragePathIgnorePatterns: ['jest-setup.js', 'node_modules', 'e2e', '.json'],
  coverageReporters: ['lcov', 'cobertura', 'text'],
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    '\\.(s?css)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|pdf)$':
      '<rootDir>/__mocks__/fileMock.js'
  },
  testEnvironment: 'jsdom',
  modulePaths: ['<rootDir>'],
  modulePathIgnorePatterns: ['<rootDir>/src/assets/framework', '.*__mocks__.*', 'e2e'],
  reporters: ['default', 'jest-junit'],
  roots: ['<rootDir>'],
  setupFiles: ['<rootDir>/config/jest/setup.js'],
  setupFilesAfterEnv: ['<rootDir>/config/jest/extends.js', 'jest-extended'],
  transform: {
    '^.+\\.(js)$': 'babel-jest',
    '^.+\\.(ts|tsx)$': 'ts-jest'
  }
};
