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
    ],
  },
  resolve: {
    // find modules with these paths in order
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
  },
};
