const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: {
    site: ['./source/javascripts/site.js'],
    style: ['./source/stylesheets/site.css.scss'],
  },
  output: {
    path: path.resolve(__dirname, '.tmp/dist'),
    filename: '[name].min.js',
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          plugins: [
            require('@babel/plugin-proposal-class-properties'),
          ]
        }
      }
    ]
  },
  plugins: [new MiniCssExtractPlugin()],
};