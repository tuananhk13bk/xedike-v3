const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

function srcPath(subDir) {
  return path.join(__dirname, "src", subDir);
}

module.exports = {
  entry: "./src/index.tsx",
  resolve: {
    alias: {
      actions: srcPath("actions"),
      assets: srcPath("assets"),
      components: srcPath("components"),
      containers: srcPath("containers"),
      layout: srcPath("layout"),
      pages: srcPath("pages"),
      reducers: srcPath("reducers"),
      utils: srcPath("utils")
    },
    extensions: [".ts", ".tsx", ".js", "jsx", "json"]
  },
  output: {
    publicPath: "/",
    path: path.join(__dirname, "/dist"),
    filename: "[name].js",
    chunkFilename: "[name].[chunkhash].js"
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: "babel-loader"
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader" // creates style nodes from JS strings
          },
          {
            loader: "css-loader" // translates CSS into CommonJS
          },
          {
            loader: "sass-loader" // compiles Sass to CSS
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "./public",
              // Hot Module Reload
              hmr: process.env.NODE_ENV === "development"
            }
          },
          "css-loader"
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name(file) {
                if (process.env.NODE_ENV === "development") {
                  return "[path][name].[ext]";
                }

                return "[hash].[ext]";
              }
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ],

  devtool: "cheap-module-evel-source-map",

  devServer: {
    historyApiFallback: true,
    publicPath: "/"
  }
};
