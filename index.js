module.exports = (api, projectOptions) => {
  api.chainWebpack(webpackConfig => {
    // modify config with webpack-chain
  })
  api.configureWebpack(webpackConfig => {
    // modify config or return an object to be merged
  })
  api.registerCommand('test', args => {
    // vue-cli-service test
  })
}