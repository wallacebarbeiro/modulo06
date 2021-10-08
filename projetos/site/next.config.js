const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')(['@wallacebarbeiro/ui']);

module.exports = withPlugins([withTM], {
  trailingSlash: true,
});