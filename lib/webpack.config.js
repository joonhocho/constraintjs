'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _extractTextWebpackPlugin = require('extract-text-webpack-plugin');

var _extractTextWebpackPlugin2 = _interopRequireDefault(_extractTextWebpackPlugin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  entry: {
    app: _path2.default.join(__dirname, 'app.js'),
    style: _path2.default.join(__dirname, '..', 'css', 'app.css')
  },
  output: {
    path: _path2.default.join(__dirname, '..', 'assets'),
    publicPath: '/assets/',
    filename: '[name].js'
  },
  resolve: {
    root: __dirname
  },
  target: 'web',
  module: {
    loaders: [{
      test: /\.css$/,
      loader: _extractTextWebpackPlugin2.default.extract('style', 'css')
    }, {
      test: /\.js$/,
      loaders: ['babel'],
      include: __dirname
    }]
  },
  plugins: [new _extractTextWebpackPlugin2.default('app.css')]
};