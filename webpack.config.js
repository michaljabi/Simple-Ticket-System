var webpack = require('webpack');
var path = require('path');

module.exports = {

  entry: [
    './client/src/index.jsx'
  ],
  devServer: {
    inline: true,
    historyApiFallback: true,
    contentBase: './client/dist',
    port: 3000
  },
  output:{
    path: 'client/src'
  },
  devtool: 'cheap-module-eval-source-map',
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-0', 'react']
        }
      },
      {
        test: /\.scss/,
        exclude: /node_modules/,
        loader: 'style-loader!css-loader!sass-loader!postcss-loader'
      }
    ]
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};