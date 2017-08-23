const NOOT = require('noot')('custom-require');
const path = require('path');

module.exports = NOOT.CustomRequire.create({
  name: 'enonerequire',
  makeGlobal: true,
  root: path.resolve(__dirname, '../')
});