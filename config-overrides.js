module.exports = function override(config, env) {
  config.experiments = {
    topLevelAwait: true,
  };
  return config;
};
