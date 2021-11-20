const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); 
const ESLintPlugin = require('eslint-webpack-plugin');
const DotenvWebpackPlugin = require('dotenv-webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'eval-source-map',  
  devServer: {   
    static: {
      directory: path.join(__dirname, 'dist')
    }              
        
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'currency-exchanger',
      template: './src/index.html',
      inject: 'body'
    }),
    new ESLintPlugin(),
    new DotenvWebpackPlugin()

  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
};



