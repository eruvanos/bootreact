var _ = require("lodash");
var webpackConfig = require("./webpack.config.js");

module.exports = function (configSetter) {
  var baseConfig = {
    basePath: "",
    port: 8888,
    frameworks: ["jasmine"],
    reporters: ["kjhtml"],
    browsers: ["Chrome"],
    autoWatch: true,
    singleRun: false,
    concurrency: Infinity,
    colors: true,
    logLevel: configSetter.LOG_INFO,

    files: [
      "src/test/react/js/main_spec.js"
    ],

    customLaunchers: {
      Chrome_with_debugger_open: {
        base: "Chrome",
        flags: ["--auto-open-devtools-for-tabs"]
      }
    },

    exclude: [],

    preprocessors: {
      "src/test/react/js/**/*.js": ["webpack", "sourcemap"]
    }
  };

  var finalConfig = _.merge(baseConfig, {webpack: webpackConfig});
  configSetter.set(finalConfig);
};
