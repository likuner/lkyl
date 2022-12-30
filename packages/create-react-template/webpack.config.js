const path = require('path')
const webpack = require('webpack')
const TerserPlugin = require('terser-webpack-plugin')
const { name, version } = require('./package.json')

module.exports = (env) => {
  const { prod } = env
  return {
    entry: './src/index.ts',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'index.js',
      chunkFilename: '[name].js',
      clean: true
    },
    mode: prod ? 'production' : 'development',
    resolve: {
      extensions: ['.ts', '.js', '.json']
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'ts-loader'
            }
          ]
        }
      ]
    },
    optimization: {
      splitChunks: {
        chunks: 'all'
      },
      minimizer: [
        new TerserPlugin({
          extractComments: false
        })
      ]
    },
    plugins: [
      new webpack.BannerPlugin({
        banner: `${name}\nversion: ${version}\n${new Date().toLocaleString()}`,
        entryOnly: true
      })
    ]
  }
}