const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');

module.exports = merge(baseConfig, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
      quiet: true,
      host: '0.0.0.0',
      hot: true,
      overlay: {
        warnings: true,
        errors: true
      },
      contentBase: path.join(__dirname, '..', 'components')
    }
})