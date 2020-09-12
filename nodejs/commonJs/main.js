var utils = require('./utils');
global.a = 'I am global a'
var a = ''
utils.request();
console.log(global, global.a)