import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default {
  entry: {
    app: path.join(__dirname, 'app.js'),
    style: path.join(__dirname, '..', 'css', 'app.css')
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
        loader: ExtractTextPlugin.extract('style', 'css')
      },
      {
        test: /\.js$/,
        loaders: ['babel'],
        include: __dirname
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('app.css')
  ]
};
