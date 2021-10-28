const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new CopyWebpackPlugin([{ from: "./src/app.css", to: "app.css" }, { from: "./src/index.html", to: "index.html" }, { from: "./src/list-item.html", to: "list-item.html" }, { from: "./src/product.html", to: "product.html" }]),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  devServer: { contentBase: path.join(__dirname, "dist"), compress: true },
};

