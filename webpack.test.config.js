const path = require("path");
const webpack = require("webpack");

module.exports = {
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "light-ts-loader",
      },
    ]
  },
  entry: {
    "test": path.resolve(__dirname, "./src/test.ts"),
  },
  output: {
    path: path.join(__dirname, "build"),
    filename: "[name].js"
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      tsConfigPath: path.join(__dirname, "./src/tsconfig.json"),
    }),
  ]
};
