const path = require('path')
const HtmlWebpackPluin = require('html-webpack-plugin')
const WebpackPwaManifestPlugin = require('webpack-pwa-manifest')

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
    }),
    new WebpackPwaManifestPlugin({
      name: 'Petgram - Tu app de fotos de mascotas',
      shortname: 'Petgram UwU',
      description: 'Con Petgram puedes encontrar fotos de tus animales domesticos muy fácilmente',
      background_color: '#fff',
      theme_color: '#b1a',
      icons: [
        {
          src: path.resolve('src/assets/icon.png'),
          sizes: [96, 128, 192, 256, 384, 512]
        }
      ]
    })
  ],
  devServer: {
    historyApiFallback: true
  }
}
