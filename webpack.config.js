// webpack.config.js
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin') ;
const ExtractTextPlugin = require( 'extract-text-webpack-plugin');
const path = require('path') ;


module.exports = {
  entry: ['webpack-hot-middleware/','./src/index.js','./src/stylesheet/appDev.scss'],
  output: { 
        path: __dirname, 
        filename: 'dist/bundle.js', 
    },
    devServer: {
      historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: { 
          presets: [ 
            [ 'es2015', { modules: false } ] 
          ] 
        }
      },
      { // regular css files
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          loader: 'css-loader?importLoaders=1',
        }),
      },
      { // sass / scss loader for webpack
        test: /\.(sass|scss)$/,
        loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader:({
          loader: "file-loader?name=dist/public/img/[name].[ext]"
        }),
      }
    ]
  },
  plugins: [ 
      new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'), // Tells React to build in either dev or prod modes. https://facebook.github.io/react/downloads.html (See bottom)
      __DEV__: true
    }),
    new webpack.HotModuleReplacementPlugin(),

    new HtmlWebpackPlugin({ 
        title: 'TestIngReact',
        template: 'src/index.ejs',
            // minify: {
            //     removeComments: true,
            //     collapseWhitespace: true
            // },
        inject: true }) ,
   
    new ExtractTextPlugin({ // define where to save the file
      filename: 'dist/app.bundle.css',
      allChunks: true,
    }),
    
  ]
};
