const { merge } = require("webpack-merge"); // Import merge function
const common = require("./webpack.common.js"); // Import common config

const devConfig = merge(common, {
  mode: "development", // Set mode to development

  // Development-specific CSS loader configuration
  // 'style-loader' injects CSS into the DOM for hot module replacement
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"], // style-loader comes first
      },
    ],
  },

  // Source map for easier debugging in development
  devtool: "inline-source-map", // Or 'eval-source-map' for faster rebuilds

  // Webpack Dev Server configuration
  devServer: {
    static: "./dist", // Serve files from the 'dist' directory
    hot: true, // Enable Hot Module Replacement (HMR)
    open: true, // Open the browser automatically when server starts
    port: 8080, // You can specify a port
  },
});

console.log(JSON.stringify(devConfig, null, 2)); // <-- ADD THIS LINE TEMPORARILY

module.exports = devConfig;
