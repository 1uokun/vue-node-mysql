const fs = require('fs');
const path = require('path');

const certOptions = {
  key: fs.readFileSync(path.resolve('./https/server.key')),
  cert: fs.readFileSync(path.resolve('./https/server.crt'))
}

module.exports = certOptions
