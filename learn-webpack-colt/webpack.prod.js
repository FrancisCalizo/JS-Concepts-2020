const path = require('path');
const common = require('./webpack.common');
const merge = require('webpack-merge'); // allows us to combine webpack configs

module.exports = merge(common, {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'main[contentHash].js', // [contentHash] to prevent a users browser from cacheing
    path: path.resolve(__dirname, 'dist')
  }
});
