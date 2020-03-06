const path = require('path');

module.exports = {
    watch: true,
    entry: './src/pages/template-dialog.js',
    output: {
        path: path.join(__dirname, '..', 'dist'),
        filename: 'bundle.js'
    },
    mode: 'development',
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
      ],
    },
}