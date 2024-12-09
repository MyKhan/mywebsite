module.exports = {
  publicPath: '/mywebsite/'
}

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
