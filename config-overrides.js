/* config-overrides.js */

const rewireYAML = require('react-app-rewire-yaml1');

module.exports = function override(config, env) {
    // ...
    config = rewireYAML(config, env);
    // ...
    return config;
}