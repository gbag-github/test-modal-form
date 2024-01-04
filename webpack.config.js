const browser = require('./webpack.config.browser.js');
const server = require('./webpack.config.server.js');

module.exports = (env, argv) => [browser(env, argv), server(env, argv)];
