"use strict";
var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    './src/index.jsx', // your app's entry point
  ],
  devtool: process.env.WEBPACK_DEVTOOL || 'eval-source-map',
  output: {
    publicPath: '/',
    path: path.join(__dirname, 'Scripts'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
      loaders: [
          {
              test: /\.jsx?$/,
              exclude: /(node_modules|bower_components|public\/)/,
              loader: "babel-loader"
          },
          {
              test: /\.less$/,
              loaders: ['style-loader', 'css-loader?importLoaders=1', 'less-loader'],
              exclude: ['node_modules']
          },
          { 
              test: /\.css$/, 
              loaders: ['style-loader', 'css-loader']
          },
          { 
              test: /\.png$/, 
              loader: "url-loader?limit=100000" 
          },
          { 
              test: /\.jpg$/, 
              loader: "file-loader" 
          },
          {
              test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, 
              loader: 'url?limit=10000&mimetype=application/font-woff'
          },
          {
              test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, 
              loader: 'url?limit=10000&mimetype=application/octet-stream'
          },
          {
              test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, 
              loader: 'file'
          },
          {
              test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, 
              loader: 'url?limit=10000&mimetype=image/svg+xml'
          }
      ]
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
};
