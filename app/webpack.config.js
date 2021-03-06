const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.js",
  devServer: {
    contentBase: path.join(__dirname, "../"),
    port: 3001,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  resolve: {
    modules: [path.resolve("src"), path.resolve("node_modules")],
    alias: {
      assets: path.resolve(__dirname, "src/assets"),
      components: path.resolve(__dirname, "src/components"),
      theme: path.resolve(__dirname, "src/theme"),
      typography: path.resolve(__dirname, "src/typography"),
      pages: path.resolve(__dirname, "src/pages"),
      scss: path.resolve(__dirname, "src/scss"),
      services: path.resolve(__dirname, "src/services"),
      utilities: path.resolve(__dirname, "src/utilities"),
    },
    extensions: [".tsx", ".ts", ".js", ".scss"],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "style.css",
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
    }),
  ],
  output: {
    filename: "index.js",
    chunkFilename: "[hash].[id].bundle.js",
    path: path.resolve(__dirname, "../"),
  },
};
