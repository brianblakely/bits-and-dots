const webpack = require(`webpack`);

module.exports = {
  watch: true,
  context: process.cwd(),
  entry: [
    `babel-polyfill`,
    `react-tap-event-plugin`,
    `./src/app.jsx`
  ],

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      mangle: {
        except: [`$super`, `$`, `exports`, `require`]
      },
      compress: {
        warnings: false
      }
    })
  ],

  resolve: {
    extensions: [``, `.js`, `.jsx`]
  },

  module: {
    loaders: [
      {
        test: /(\.js|\.jsx)?$/,
        exclude: /(node_modules|bower_components)/,
        loader: `babel`,
        query: {
          plugins: [`transform-runtime`],
          presets: [`es2015`, `stage-3`, `react`],
          cacheDirectory: true
        }
      },
      {
        test: /\.css$/,
        loader: `style!css`
      },
      {
        test: /\.scss$/,
        loader: `style!css!sass`
      }
    ]
  },

  devtool: `eval-source-map`,
  output: {
    path: process.cwd()+`/`,
    filename: `build/app.js`,
    sourceMapFilename: `build/app.js.map`
  }
};
