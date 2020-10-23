const {merge} = require('webpack-merge');
const common = require('./webpack.common');
const DEV_PORT = 10086;
const path = require('path')

// tell dev server to serve the html in dist
const outputPath = path.resolve(__dirname, '..', 'dist');

module.exports = merge(common, {
  mode: 'development',
  // shows a source map when in dev mode
  devtool: 'eval-source-map',
  devServer: {
    contentBase: outputPath,
    port: DEV_PORT,
  },
});

