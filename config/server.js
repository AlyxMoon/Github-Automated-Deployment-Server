const options = require('command-line-args')([
  { name: 'debug', alias: 'd', type: Boolean },
  { name: 'port', alias: 'p', type: Number }
])

module.exports = {
  DEBUG: options.debug || false,
  PORT: options.port || 11050
}
