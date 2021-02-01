const path = require('path');

const getPathFromSrc = (p) => {
  return path.resolve(__dirname, '..', 'src', p);
};

module.exports = {
  // entry tells webpack where to start packing
  entry: {
    main: './src/index.tsx',
  },
  module: {
    rules: [
      // use ts-loader on tsx or ts files
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    // find modules with these paths in order
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
    // use alias so that we don't have to use the ../.
    alias: {
      store: getPathFromSrc('store'),
      api: getPathFromSrc('api'),
      utils: getPathFromSrc('utils'),
      components: getPathFromSrc('components'),
    },
  },
};
