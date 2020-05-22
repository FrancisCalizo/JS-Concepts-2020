const path = require('path');
const common = require('./webpack.common');
const merge = require('webpack-merge'); // allows us to combine webpack configs

module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  }
});
