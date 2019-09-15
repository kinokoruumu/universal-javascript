const webpack = require("webpack");
const path = require("path");
const WebpackBar = require("webpackbar");

const IS_PRODUCTION = process.env.NODE_ENV === "production";

/**
 * @type import('webpack').Configuration
 */
module.exports = {
  target: "web",
  mode: IS_PRODUCTION ? "production" : "development",
  entry: path.resolve(__dirname, "./src/index.tsx"),
  devtool: "#source-map",
  output: {
    path: path.resolve(__dirname, "./public"),
    filename: "bundle.js"
  },
  resolve: {
    modules: [path.resolve("./src"), path.resolve("./node_modules")],
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: [/node_modules/, /dist/, /build/],
        use: [
          {
            loader: "ts-loader",
            options: {
              configFile: "tsconfig.client.json",
              transpileOnly: true,
              happyPackMode: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new WebpackBar({
      name: "bootstrap"
    }),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || "development")
      },
      "process.title": JSON.stringify("browser")
    })
  ]
};
