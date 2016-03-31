import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

throw 11;
module.exports = function() {
  return {
    entry: {
      app: path.join(__dirname, 'app.js'),
      style: path.join(__dirname, 'app.css')
    },
    output: {
      path: path.join(__dirname, '..', 'assets'),
      publicPath: '/assets/',
      filename: '[name].js'
    },
    resolve: {
      root: __dirname
    },
    target: 'web',
    module: {
      loaders: [
        {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract('style', 'css'),
          include: __dirname
        },
        {
          test: /\.js$/,
          loaders: ['babel'],
          include: __dirname
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin('styles.css')
    ]
  };
};
