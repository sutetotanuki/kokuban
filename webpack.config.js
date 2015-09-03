var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/public/assets/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin("base.css")
  ],
  resolve: {
    extensions: ['', '.js', '.jsx', '.sass', 'scss']
  },
  module: {
    loaders: [
      {test: /\.jsx?$/, loaders: ['react-hot', 'babel?stage=0'], include: path.join(__dirname, 'src')},
      {test: /\.s[ca]ss$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader'), exclude: /node_modules/}
    ]
  }
};
