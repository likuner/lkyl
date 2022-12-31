const path = require('path')
const dotenv = require('dotenv')
const dotenvExpand = require('dotenv-expand')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const FileManagerPlugin = require('filemanager-webpack-plugin')
const { name, version } = require('./package.json')

const { NODE_ENV, BUILD_ZIP, OPEN } = process.env
const isProd = NODE_ENV === 'production'

dotenvExpand.expand(dotenv.config({ path: `./.env.${NODE_ENV}` }))
dotenvExpand.expand(dotenv.config())

module.exports = () => {
  const babelLoader = {
    loader: 'babel-loader',
    options: {
      presets: [
        '@babel/preset-react'
      ],
      plugins: [
        '@babel/plugin-transform-runtime'
      ]
    }
  }
  
  const cssLoader = (importLoaders = 1) => ({
    loader: 'css-loader',
    options: {
      importLoaders,
      modules: {
        auto: (resourcePath) => {
          return ['.module.less', '.module.css'].some(item => resourcePath.endsWith(item))
        },
        localIdentName: '[local]_[hash:base64:10]'
      }
    }
  })
  
  const postCssLoader = {
    loader: 'postcss-loader',
    options: {
      postcssOptions: {
        plugins: [
          'autoprefixer'
        ]
      }
    }
  }

  const buildTime = new Date().toLocaleString()

  const config = {
    entry: './src/index.tsx',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'js/[name].[contenthash].js',
      assetModuleFilename: 'assets/[name].[contenthash][ext][query]',
      publicPath: '/',
      clean: true
    },
    mode: isProd ? 'production' : 'development',
    devtool: isProd ? false : 'source-map',
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      },
      extensions: ['.tsx', '.ts', '.jsx', '.js', '.less', '.css', '.json']
    },
    performance: {
      hints: false
    },
    optimization: {
      sideEffects: true,
      splitChunks: {
        chunks: 'all'
      },
      minimizer: [
        new TerserPlugin({
          extractComments: false
        }),
        new CssMinimizerPlugin()
      ]
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: [
            babelLoader
          ]
        },
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: [
            babelLoader,
            {
              loader: 'ts-loader',
              options: {
                configFile: path.resolve(__dirname, 'tsconfig.json')
              }
            }
          ]
        },
        {
          test: /\.less$/,
          use: [
            MiniCssExtractPlugin.loader,
            cssLoader(2),
            postCssLoader,
            {
              loader: 'less-loader',
              options: {
                lessOptions: {
                  modifyVars: {
                    hack: `true; @import "${path.resolve(__dirname, 'src/style/variable.less')}";`,
                  }
                }
              }
            }
          ]
        },
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            cssLoader(),
            postCssLoader
          ]
        },
        {
          test: /\.(png|jpe?g|gif|svg|webp|mp3|mp4)$/,
          type: 'asset',
          parser: {
            dataUrlCondition: {
              maxSize: 4096
            }
          }
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './public/index.html',
        inject: 'body',
        title: 'React-Ts-Template',
        minify: false,
        externals: [],
        buildTime
      }),
      new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash].css'
      }),
      new webpack.DefinePlugin({
        'process.env': JSON.stringify(process.env)
      }),
      new CopyPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, 'public'),
            filter: (resourcePath) => !resourcePath.endsWith('/index.html')
          }
        ]
      }),
      new webpack.BannerPlugin({
        banner: `${name}\nversion: ${version}\n${buildTime}`,
        entryOnly: true,
        footer: true
      })
    ],
    devServer: {
      open: Boolean(OPEN),
      port: 3000,
      client: {
        overlay: false
      },
      historyApiFallback: true
    }
  }

  if (BUILD_ZIP) {
    config.plugins.push(
      new FileManagerPlugin({
        events: {
          onEnd: {
            archive: [
              {
                source: './dist',
                destination: './dist.zip',
                format: 'zip'
              }
            ]
          }
        }
      })
    )
  }
  
  return config
}