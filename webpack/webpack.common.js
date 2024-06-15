const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const Dotenv = require("dotenv-webpack");

module.exports = {
  entry: path.resolve(__dirname, "..", "./src/index.tsx"),
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      styles: path.resolve(__dirname, "..", "src/styles/"),
      pages: path.resolve(__dirname, "..", "src/pages/"),
      components: path.resolve(__dirname, "..", "src/components/"),
      assets: path.resolve(__dirname, "..", "src/assets/"),
      constans: path.resolve(__dirname, "..", "src/constans/"),
      hooks: path.resolve(__dirname, "..", "src/hooks/"),
      utils: path.resolve(__dirname, "..", "src/utils/"),
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
        type: "asset/resource",
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: "asset/inline",
      },
      {
        test: /\.mp3$/,
        loader: "file-loader",
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "..", "./build"),
    filename: "bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "..", "public/index.html"),
      favicon: path.resolve(__dirname, "..", "public/favicon.ico"),
      manifest: path.resolve(__dirname, "..", "public/manifest.json"),
      publicPath: "/",
    }),
    new webpack.ProvidePlugin({
      process: "process/browser",
    }),
    new Dotenv(),
    new webpack.EnvironmentPlugin({
      REACT_APP_API_URL: "",
      REACT_APP_API_KEY_AUTHORIZATION: "",
    }),
  ],
  stats: "errors-only",
};
