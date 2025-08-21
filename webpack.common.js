const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // Your main entry point for the application
  entry: "./src/index.js",

  // Output settings for bundled files
  output: {
    filename: "main.js", // Output bundle file name
    path: path.resolve(__dirname, "dist"), // Output directory
    clean: true, // Clean the output directory before each build (Webpack 5+)
  },

  // Rules for how different module types are treated
  /* module: {
    rules: [
      // Rule for handling CSS files
      {
        test: /\.css$/i, // Matches files ending with .css (case-insensitive)
        // Loaders will be added by dev/prod specific configs to decide if inline or extracted
        // We just define the 'css-loader' here as it's common for both
        use: ['css-loader'],
      },
      // Rule for handling images (png, svg, jpg, jpeg, gif)
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource', // Webpack 5 built-in asset module for images
      },
      // Rule for handling fonts
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
     
    ],
  },*/

  // Plugins used in both development and production
  plugins: [
    // Generates an HTML file and injects your bundled JavaScript
    new HtmlWebpackPlugin({
      template: "./src/template.html", // Path to your HTML template file
      filename: "index.html", // Output HTML file name
    }),
  ],
};
