const options = require('command-line-args')([
  { name: 'debug', alias: 'd', type: Boolean },
  { name: 'port', alias: 'p', type: Number },
  { name: 'web_directory', alias: 'w', type: String }
])
const path = require('path')

module.exports = {
  DEBUG: options.debug || false,
  PORT: options.port || 11050,
  WEB_DIRECTORY:  options.web_directory || path.resolve('..')
}
