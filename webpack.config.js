const webpack = require("webpack");
const path = require("path");
const WebpackBar = require("webpackbar");
const ManifestPlugin = require("webpack-manifest-plugin");

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
    filename: "[name].[chunkhash].js",
    publicPath: "/assets/",
    chunkFilename: "[name].[chunkhash].js",
    sourceMapFilename: "[name].[chunkhash].js.map"
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
  optimization: {
    splitChunks: {
      name: "vendor",
      chunks: "initial"
    }
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
    }),
    new ManifestPlugin({
      fileName: path.join(__dirname, "./build/chunk-manifest.json"),
      filter: file => file.isChunk && file.name && file.name.endsWith(".js"),
      map: file => {
        file.name = file.name.replace(/\.js$/, "");
        return file;
      }
    })
  ]
};
