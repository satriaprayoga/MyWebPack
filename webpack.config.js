const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractSass = new ExtractTextPlugin({
  filename: "[name].[contenthash].css",
  disable: process.env.NODE_ENV === "development"
});
// Bootstrap dependencies
const providePluginList = {
  $: "jquery",
  jQuery: "jquery",
  "window.jQuery": "jquery",
  Popper: ["popper.js", "default"],
  // Bootstrap scripts
  Alert: "exports-loader?Alert!bootstrap/js/src/alert",
  Button: "exports-loader?Button!bootstrap/js/src/button",
  Carousel: "exports-loader?Carousel!bootstrap/js/src/carousel",
  Collapse: "exports-loader?Collapse!bootstrap/js/src/collapse",
  Dropdown: "exports-loader?Dropdown!bootstrap/js/src/dropdown",
  Modal: "exports-loader?Modal!bootstrap/js/src/modal",
  Popover: "exports-loader?Popover!bootstrap/js/src/popover",
  Scrollspy: "exports-loader?Scrollspy!bootstrap/js/src/scrollspy",
  Tab: "exports-loader?Tab!bootstrap/js/src/tab",
  Tooltip: "exports-loader?Tooltip!bootstrap/js/src/tooltip",
  Util: "exports-loader?Util!bootstrap/js/src/util"
};

module.exports = {
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: extractSass.extract({
          use: [
            {
              loader: "css-loader",
              options: {
                minimize: {
                  discardComments: {
                    removeAll: true
                  }
                }
              }
            },
            {
              loader: "postcss-loader"
            },
            {
              loader: "sass-loader"
            }
          ],
          fallback: "style-loader",
          allChunks: true
        })
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[hash].[ext]",
              outputPath: "images/"
            }
          },
          {
            loader: "image-webpack-loader",
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              webp: {
                quality: 75
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(["dist"]),
    extractSass,
    new HtmlWebPackPlugin({
      template: "src/index.html",
      filename: "index.html"
    })
  ]
};
