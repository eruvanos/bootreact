var path = require("path");
var webpack = require("webpack");

var PROJECT_ROOT = path.join(__dirname, ".");
var JSX_ROOT = path.join(PROJECT_ROOT, "/src/main/react/js/");
var JSX_ROOTFILE = path.join(JSX_ROOT, "app.js");
var SCSS_ROOT = path.join(PROJECT_ROOT, "/src/main/react/css");

var config = {
  plugins: [
    // used by react to silence warnings
    new webpack.DefinePlugin({
      "process.env": {
        "NODE_ENV": JSON.stringify(process.env.NODE_ENV || "development")
      }
    }),

    new webpack.ProvidePlugin({
      $: "jquery",
      _: "lodash",
      React: "react",
      ReactDOM: "react-dom",
      Redux: "redux",
      ReactRedux: "react-redux"
    })
  ],

  entry: JSX_ROOTFILE,

  output: {
    path: path.join(PROJECT_ROOT, "build/resources/main/public"),
    publicPath: "/",
    filename: "app.js"
  },

  devtool: (process.env.NODE_ENV === "production" ? "" : "inline-source-map"),

  resolve: {
    root: path.resolve(JSX_ROOT),
    extensions: ["", ".js"],

    alias: {
      "root": path.join(JSX_ROOT, "."),
      "actions": path.join(JSX_ROOT, "actions"),
      "components": path.join(JSX_ROOT, "components"),
      "containers": path.join(JSX_ROOT, "containers"),
      "reducers": path.join(JSX_ROOT, "reducers"),
      "constants": path.join(JSX_ROOT, "constants")
    }
  },

  module: {
    loaders: [
      {
        loaders: ["babel-loader"],
        test: /\.js$/,
        exclude: /node_modules/
      },

      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass", "resolve-url"],
        include: SCSS_ROOT
      }
    ]
  }
};

if (process.env.NODE_ENV === "production") {
  var uglifyPlugin = new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  });

  config.plugins.push(uglifyPlugin);
}

module.exports = config;