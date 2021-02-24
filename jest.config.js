module.exports = {
  testMatch: [
    '**/__tests__/**/*.+(ts|tsx|js)',
    '**/?(*.)+(spec|test).+(ts|tsx|js)',
  ],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  setupFilesAfterEnv: ['<rootDir>/.set-up-enzyme.js'],
  moduleNameMapper: {
    // skip css
    '\\.(css)$': 'identity-obj-proxy',
    // map baseUrl + paths correctly
    '^components/(.*)$': '<rootDir>/src/components/$1',
    '^utils/(.*)$': '<rootDir>/src/utils/$1',
    '^store/(.*)$': '<rootDir>/src/store/$1',
    '^api/(.*)$': '<rootDir>/src/api/$1',
  },
};
