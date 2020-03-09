const htmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: path.join(__dirname, '..', './components/dialog/dialog.js'),
  output: {
      library: 'Dialog',
      libraryTarget: 'umd',
      // filename: 'someLibName.js',
      // auxiliaryComment: 'Test Comment'
      path: path.join(__dirname, '..', 'dist'),
      filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.js$/i,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ]
      },
    ],
  },
  plugins: [
    new htmlWebpackPlugin({
      template: path.join(__dirname, '..', 'components/index.html'),
      inject: true
    })
  ]
}