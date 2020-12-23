const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => {
  const isProduction = env === 'production';
  const CSSExtract = new MiniCssExtractPlugin({ filename: 'style.css' });

  return {
    mode: isProduction ? 'production' : 'development',
    entry: ['@babel/polyfill', './src/app.js'],
    output: {
      path: path.join(__dirname, 'public', 'dist'),
      filename: 'bundle.js'
    },
    plugins: [CSSExtract],
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react']
            }
          }
        },
        {
          test: /\.s?css$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
        }
      ]
    },
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
      hot: true,
      contentBase: path.join(__dirname, 'public'),
      port: 8080,
      historyApiFallback: true,
      publicPath: '/dist/'
    }
  };
};
