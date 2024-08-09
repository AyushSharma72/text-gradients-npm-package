const path = require("path");

module.exports = {
  mode: "production", // or 'development'
  entry: "./src/index.jsx", // Entry point
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    library: "text-gradients",
    libraryTarget: "umd", // Universal Module Definition
    globalObject: "this",
    umdNamedDefine: true,
  },
  resolve: {
    alias: {
      react: require.resolve("react"),
    },
  },
  externals: {
    react: "react",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  externals: {
    react: "react",
    "react-dom": "react-dom",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
};
