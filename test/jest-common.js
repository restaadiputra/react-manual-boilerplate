const path = require('path')

module.exports = {
  rootDir: path.join(__dirname, '..'),
  moduleDirectories: ['node_modules', path.join(__dirname, 'src'), 'shared'],
  moduleNameMapper: {
    '\\.module\\.(css|less)$': 'identity-obj-proxy',
    '\\.css$': require.resolve('./style-mock.js'),
  },
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': require.resolve('./file-transformer.js'),
  },
  watchPlugins: [
    'jest-watch-select-projects',
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
}