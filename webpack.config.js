const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const WorkboxPlugin = require("workbox-webpack-plugin");

module.exports = {
  entry: "./src/client/index.js",
  mode: "development", // Change to "production" for production builds
  devtool: "inline-source-map", // Source maps for easier debugging
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: "bundle.js",
    libraryTarget: "var",
    library: "Client",
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Use RegExp to match JavaScript files
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.scss$/, // Use RegExp to match SCSS files
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  devServer: {
    static: path.join(__dirname, 'dist'),
    hot: true,
    open: true, // Open the browser after server has started
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/client/views/index.html",
      filename: "index.html",
    }),
    new CleanWebpackPlugin({
      dry: false, // Set to false to actually clean files
      verbose: true,
      cleanStaleWebpackAssets: true,
      protectWebpackAssets: false,
    }),
    new WorkboxPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
    }),
  ],
};
