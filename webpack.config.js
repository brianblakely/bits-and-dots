var webpack = require('webpack');

module.exports = {
  watch: true,
  context: process.cwd(),
  entry: [
    'babel-polyfill',
    './js/script.js'
  ],

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      mangle: {
        except: ['$super', '$', 'exports', 'require']
      },
      compress: {
        warnings: false
      }
    })
  ],

  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          plugins: ['transform-runtime'],
          presets: ['es2015'],
          cacheDirectory: true
        }
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass'
      }
    ]
  },

  devtool: 'eval-source-map',
  output: {
    path: process.cwd()+'/',
    filename: 'build/script.js',
    sourceMapFilename: 'build/script.js.map'
  }
};
