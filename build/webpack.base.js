const htmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: path.join(__dirname, '..', './components/dialog/dialog.js'),
  output: {
      library: 'dialog',
      path: path.join(__dirname, '..', 'dist'),
      filename: 'bundle.js',
      libraryTarget: 'umd', // 采用通用模块定义
      libraryExport: 'default', // 兼容 ES6(ES2015) 的模块系统、CommonJS 和 AMD 模块规范
      globalObject: 'this', // 兼容node和浏览器运行，避免window is not undefined情况
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