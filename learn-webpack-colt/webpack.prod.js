const path = require('path');
const common = require('./webpack.common');
const merge = require('webpack-merge'); // allows us to combine webpack configs
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // cleans the dist folder of unused hashed files upon build

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: 'main[contentHash].js', // [contentHash] to prevent a users browser from cacheing
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [new CleanWebpackPlugin()]
});
