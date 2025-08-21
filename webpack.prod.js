const { merge } = require("webpack-merge"); // Import merge function
const common = require("./webpack.common.js"); // Import common config
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // Import the plugin

module.exports = merge(common, {
  mode: "production",
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"], // MiniCssExtractPlugin.loader comes first
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css", // Output CSS file with content hash for caching
    }),
  ],

  // Optimization settings for production build
  optimization: {
    minimize: true, // Enable code minification
    // You can add more optimizers like TerserPlugin for JS minification
    // or CssMinimizerPlugin for CSS minification (install these if needed)
    /*
    minimizer: [
      new TerserPlugin(),
      new CssMinimizerPlugin(),
    ],
    */
  },

  // Exclude source maps in production for smaller bundle size, or use a specific type if needed
  devtool: false, // No source maps in production by default (or 'source-map' for full, external maps)
});
