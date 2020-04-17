const merge = require('webpack-merge')
const baseConfig = require('./webpack.server.config.base')

module.exports = merge(baseConfig, {
  mode: 'production',
  entry: {
    server: './src/server/server.prod.js'
  },
})
