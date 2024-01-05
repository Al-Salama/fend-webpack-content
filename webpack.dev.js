const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: 'source-map',
  devServer: {
    open: true, // This will open the browser automatically
  },
  entry: "./src/client/index.js",
  module: {
    rules: [
      {
        test: "/\.js$/",
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/client/views/index.html",
      filename: "./index.html"
    })
  ]
}