const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')

const host = process.env.HOST || 'localhost'
const port = process.env.PORT || 3000

module.exports = {
  entry: ['react-hot-loader/patch', './src/index.js'],
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js',
  },
  resolve: {
    modules: ['node_modules', path.join(__dirname, 'src'), 'shared'],
    alias: {'react-dom': '@hot-loader/react-dom'},
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [{loader: 'style-loader'}, {loader: 'css-loader'}],
      },
      {
        test: /\.module\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: { modules: true, localsConvention: 'camelCaseOnly' },
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: 'file-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
      filename: 'index.html',
    }),
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, './public'),
    compress: true,
    host,
    port,
    hot: true,
    liveReload: true,
    publicPath: '/',
    open: true,
  },
}
