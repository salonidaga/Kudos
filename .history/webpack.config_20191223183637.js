var path = require("path");
var webpack = require("webpack");
const dashboardDynamicCompnoents = require("./src/config");

const dynamicComponents = {
  /* =========================
   * Add micro-frontend app entry points here
   * ====================== */
  ...dashboardDynamicCompnoents
};

module.exports = {
  entry: dynamicComponents,
  output: {
    path: path.join(__dirname, "public", "bundles"),
    library: ["__WIDGETS__", "[name]"],
    libraryTarget: "umd"
  },
  externals: {
    react: "React",
    "react-dom": "ReactDOM",
    "react-router-dom": "ReactRouterDOM",
    "styled-components": "styled"
  },
  module: {
    rules: [
      {
        test: /\.ts|\.tsx$/,
        loader: "ts-loader",
        options: {
          transpileOnly: true
        }
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    modules: [path.resolve(__dirname, "node_modules"), "node_modules"]
  },
  devServer: {
    contentBase: path.join(__dirname, "public"),
    compress: true,
    port: 9001,
    writeToDisk: true,
    https: true
  }
};
