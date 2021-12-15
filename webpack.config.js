const HtmlWebpackPluin = require('html-webpack-plugin')

module.exports = {
  output: {
    filename: 'app.bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env'
              ],
              [
                '@babel/preset-react', { runtime: 'automatic' }
              ]
            ]
          }
        }
      }
    ]
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPluin({
      template: 'src/index.html'
    })
  ],
  devServer: {
    historyApiFallback: true
  }
}
