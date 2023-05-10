const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const mode = process.env.NODE_ENV || "production";

module.exports = {
  mode,
  entry: path.resolve(__dirname, "src", "index.js"),
  output: {
    path: path.resolve(__dirname, "./dist"),
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html"),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ],
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
  },
};
// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const path = require("path");
// const mode = process.env.NODE_ENV || "production";

// module.exports = {
//   mode,
//   entry: path.resolve(__dirname, "src", "index.js"),
//   output: {
//     path: path.resolve(__dirname, "dist"),
//   },

//   plugins: [
//     new HtmlWebpackPlugin({
//       template: path.resolve(__dirname, "dist", "index.html"),
//     }),
//   ],
//   module: {
//     rules: [
//       {
//         test: /\.css$/i,
//         use: ["style-loader", "css-loader"],
//       },
//       {
//         test: /\.html$/i,
//         loader: "html-loader",
//       },
//     ],
//   },
//   devServer: {
//     static: {
//       directory: path.resolve(__dirname, "dist"),
//     },
//   },
// };
