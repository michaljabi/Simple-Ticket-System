function buildConfig(env) {
  return require('./config/webpack.' + env + '.config.js');
}
module.exports = buildConfig;