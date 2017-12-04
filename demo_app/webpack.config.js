var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './static/app.js',
  output: {
    filename: 'static/bundle.js'
  },
  module: {

    rules: [
      { // regular css files
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          loader: 'css-loader?importLoaders=1',
        }),
      },
      { // sass / scss loader for webpack
        test: /\.(sass|scss)$/,
        loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({ // define where to save the file
      filename: 'static/[name].css',
      allChunks: true,
    }),
  ],
};
