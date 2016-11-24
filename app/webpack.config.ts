import * as path from "path";
import * as webpack from "webpack";
require("es6-promise").polyfill();

export default module.exports = {
  devtool: "eval",
  entry: [
    "webpack-dev-server/client?http://localhost:3000",
    "webpack/hot/only-dev-server",
    "react-hot-loader/patch",
    "./src/index.tsx",
  ],
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "dist"),
    publicPath: "/dist/",
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        BROWSER: JSON.stringify(true),
      },
    }),
  ],
  module: {
    loaders: [
      {
        loaders: ["style", "css", "postcss", "sass"],
        test: /\.scss$/,
      },
      {
        include: path.join(__dirname, "src"),
        loader: ["babel"],
        test: /\.js$/,
      },
      {
        include: path.join(__dirname, "src"),
        loaders: ["ts-loader"],
        test: /\.tsx?$/,
      },
    ],
  },
  resolve: {
    extensions: ["", ".webpack.js", ".web.js", ".js", ".ts", ".tsx"],
  },
  postcss: [ require("autoprefixer") ],
};
