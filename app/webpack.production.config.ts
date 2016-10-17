let path = require("path");
let webpack = require("webpack");
let ExtractTextPlugin = require("extract-text-webpack-plugin");
require("es6-promise").polyfill();

module.exports = {
  devtool: "cheap-module-source-map",
  entry: [
    "./src/index.tsx",
  ],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.min.js",
    publicPath: "/static/",
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        "NODE_ENV": JSON.stringify("production"),
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
    }),
    new ExtractTextPlugin("/bundle.min.css", {
      allChunks: true,
    }),
  ],
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract("css!postcss!sass"),
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$/i,
        loader: "file-loader?name=/img/[name].[ext]",
      },
      { test: /\.ts|.tsx?$/,
        loaders: ["ts-loader"],
        include: path.join(__dirname, "src"),
      },
    ],
  },
  resolve: {
    extensions: ["", ".webpack.js", ".web.js", ".js", ".ts", ".tsx"],
  },
  postcss: [ require("autoprefixer") ],
};
