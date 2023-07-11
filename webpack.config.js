/* eslint-disable @typescript-eslint/no-var-requires */

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");

module.exports = {
  context: path.resolve(__dirname, "src"),
  devtool: "inline-source-map",
  entry: "./index.ts",
  mode: "development",
  devServer: {
    allowedHosts: 'all',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
      },
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] }
    ],
  },
  output: {
    filename: "client.js",
    path: path.resolve(__dirname, "static/js"),
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "our project",
      template: "../public/index.html",
    }),
    new ESLintPlugin(),
  ],
};
