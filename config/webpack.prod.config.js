var webpack = require( 'webpack' );
var path = require( 'path' );

module.exports = {
  entry:  './client/src/index.jsx',
  devtool: 'cheap-module-source-map',
  output: {
    path: path.join( __dirname, "/../dist" ),
    filename: 'bundle.js'
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
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      mangle: {
        screw_ie8: true,
        keep_fnames: true
      },
      compress: {
        screw_ie8: true
      },
      comments: false
    })
  ],
  resolve: {
    extensions: [ '.js', '.jsx', '.json' ]
  }
}