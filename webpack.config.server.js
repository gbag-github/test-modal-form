const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const pkg = require('./package.json');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = (env, argv) => {
  const mode = (argv && argv.mode) || 'development';
  const isProd = mode === 'production';

  return {
    entry: {
      server: `./src/server.js`
    },

    output: {
      publicPath: '/',
      filename: '[name].js',
      path: path.resolve(__dirname, 'dist/build'),
      libraryTarget: 'commonjs2'
    },

    target: 'node',
    node: {
      // Need this when working with express, otherwise the build fails
      __dirname: false, // If you don't put this is, __dirname
      __filename: false // And __filename return blank or /
    },

    resolve: {
      modules: ['node_modules', 'src'],
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
      plugins: [new TsconfigPathsPlugin()],
      alias: {
        'any-promise': path.resolve(__dirname, 'src/util/promise')
      }
    },

    module: {
      rules: [
        {
          // Jsx -> js
          test: /\.js$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                cacheDirectory: true,
                presets: pkg.babel.presets,
                plugins: pkg.babel.plugins,
                compact: false
              }
            }
          ]
        },
        {
          test: /\.(css|scss|png|jpg|gif|svg|eot|woff2|ttf|woff|otf|pdf)$/,
          use: 'null-loader'
        },
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
          options: {
            // Disable type checker - we will use it in fork plugin
            transpileOnly: true
          },
          exclude: /dist/
        }
      ]
    },

    // Webpack output...
    stats: {
      assets: true,
      children: false,
      chunks: false,
      colors: true,
      errors: true,
      errorDetails: false,
      hash: true,
      modules: false,
      performance: false,
      version: false
    },

    plugins: [
      new webpack.DefinePlugin({
        'process.env.BRAND': JSON.stringify('ariline')
      }),

      // TS type checking on separate thread to increase build and incremental build speed
      new ForkTsCheckerWebpackPlugin(),

      // DotEnv for overwriting env vars
      new Dotenv({
        path: process.env.DOTENV_CONFIG_PATH
      })
    ],

    // Minification
    optimization: {
      minimize: isProd,
      minimizer: [
        new TerserPlugin({
          /*
          Reference: https://github.com/webpack-contrib/terser-webpack-plugin#options
          Defaults: { parallel: true, sourceMap: false }
          */
          extractComments: {
            condition: /^\**!|@preserve|@license|@cc_on/i,
            filename: ({ filename }) => {
              return `${filename}.LICENSE`;
            },
            banner: (licenseFile) => {
              const path = JSON.stringify(licenseFile);
              return `License information can be found in ${path}`;
            }
          },
          terserOptions: {
            // Reference: https://github.com/terser/terser#minify-options
            mangle: false
          }
        })
      ]
    },

    // Note: mode sets process.env.NODE_ENV
    mode
  };
};
