const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const webpack = require('webpack');


module.exports = {

  //devtool: 'cheap-module-eval-source-map',

  // 'webpack-dev-server/client?http://localhost:8080/', 'webpack/hot/only-dev-server',

  entry: {
    index: './app/index.js'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
      test: /\.css$/,
      exclude: [/bower_components/, /node_modules/],
      use: ExtractTextPlugin.extract({
        loader: 'css-loader',
        options: {
          sourceMap: true
        }
      })
    }]
  },
  devtool: 'source-map',
  plugins: [
    // new ExtractTextPlugin({ filename: 'style.css', disable: false, allChunks: true })
  ]
};

/*
 entry: [
 'babel-polyfill',
 './build/index'
 ],
 output: {
 path: __dirname + '/dist',
 filename: 'index.js',
 publicPath: '/'
 },

 module: {
 loaders: [
 {
 test: /\.jsx$/,
 loader: ['babel'],
 include: '',
 exclude: [/bower_components/, /node_modules/],
 query: {
 presets: ['es2015', 'es2016', 'es2017', 'react']
 }
 }
 ]
 }*/
