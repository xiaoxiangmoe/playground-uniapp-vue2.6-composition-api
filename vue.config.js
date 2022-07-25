const ScriptSetup = require('unplugin-vue2-script-setup/webpack').default;

/**
 * @type { import('@vue/cli-service').ProjectOptions }
 */
const config = {
  configureWebpack: {
    plugins: [ScriptSetup()],
  },
  parallel: false,
  chainWebpack(config) {
    // disable type check and let `vue-tsc` handles it
    config.plugins.delete('fork-ts-checker');
  },
};

module.exports = config;
