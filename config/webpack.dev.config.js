var webpack = require( 'webpack' );
var path = require( 'path' );

module.exports = {
  entry:  './client/src/index.jsx',
  devtool: 'cheap-eval-source-map',
  watch: true,
  devServer: {
    inline: true,
    historyApiFallback: true,
    contentBase: path.join( __dirname, "/../dist" ),
    compress: true,
    port: 3000,
    quiet: true,
    watchOptions: {
      ignored: /node_modules/
    },
  },
  output: {
    path: path.join( __dirname, "/../dist" ),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [ 'es2015', 'stage-0', 'react' ]
        }
      },
      {
        test: /\.scss/,
        exclude: /node_modules/,
        loader: 'style-loader!css-loader!sass-loader!postcss-loader'
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin()
  ],
  resolve: {
    extensions: [ '.js', '.jsx', '.json', '']
  }
};