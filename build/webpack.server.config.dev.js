const merge = require('webpack-merge')
const baseConfig = require('./webpack.server.config.base')

module.exports = merge(baseConfig, {
  mode: 'development',
  entry: {
    server: './src/server/server.dev.js'
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
        options: {
          emitWarning: true,
          failOnError: false,
          failOnWarning: false
        }
      }
    ]
  }
})
