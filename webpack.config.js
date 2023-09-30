const path = require('path')

module.exports = {
  entry: path.join(__dirname, 'src', 'bootstrap.js'),
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  devtool: 'source-map',
  devServer: {
    // contentBase: path.join(__dirname, '../server/public'),
    static: {
      directory: path.join(__dirname, 'public')
    },
    compress: true,
    port: 3001,
    open: true,
    historyApiFallback: true, // This ensures that the dev server will redirect all server requests to index.html (useful for Single Page Applications).
  },
};
