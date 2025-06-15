require('ts-node/register');

const plopfile = require('./plopfile.ts');

module.exports = plopfile.default || plopfile;
