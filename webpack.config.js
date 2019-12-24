// var path = require("path");
// var webpack = require("webpack");
// const dashboardDynamicCompnoents = require("./src/config");

// const dynamicComponents = {
//   /* =========================
//    * Add micro-frontend app entry points here
//    * ====================== */
//   ...dashboardDynamicCompnoents
// };

// const globals = {
//   /* =========================
//    * Add build time variables here
//    * These variables also need to added in ./global.d.ts file to be available in Typescript
//    * ====================== */

//   __APP_NAME__: "partnerapi",
//   __CLIENT_ID__: process.env.clientId || "dd722e00-f76f-4f10-89cb-f9f8ae3f9b7a",
//   __BASE_URL__: process.env.baseUrl || "http://localhost:9003",
//   __INSTRUMENTATION_KEY__:
//     process.env.instrumentationKey || "958d6073-76a5-443a-9901-9ec4c35c030e"
// };

// module.exports = {
//   entry: dynamicComponents,
//   output: {
//     path: path.join(__dirname, "public", "bundles"),
//     library: ["__WIDGETS__", "[name]"],
//     libraryTarget: "umd"
//   },
//   externals: {
//     react: "React",
//     "react-dom": "ReactDOM",
//     "react-router-dom": "ReactRouterDOM",
//     "styled-components": "styled"
//   },
//   module: {
//     rules: [
//       {
//         test: /\.ts|\.tsx$/,
//         loader: "ts-loader",
//         options: {
//           transpileOnly: true
//         }
//       }
//     ]
//   },
//   resolve: {
//     extensions: [".ts", ".tsx", ".js"],
//     modules: [path.resolve(__dirname, "node_modules"), "node_modules"]
//   },
//   plugins: [new webpack.DefinePlugin(stringifyConfigValues(globals))],
//   devServer: {
//     contentBase: path.join(__dirname, "public"),
//     compress: true,
//     port: 9001,
//     historyApiFallback: true,
//     writeToDisk: true,
//     https: true
//   }
// };

// function stringifyConfigValues(config) {
//   const result = {};
//   Object.keys(config).forEach(key => {
//     result[key] = JSON.stringify(config[key]);
//   });

//   return result;
// }

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
