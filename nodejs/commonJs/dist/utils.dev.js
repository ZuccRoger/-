"use strict";

// utils.js
var config = require('./config');

var utils = {
  request: function request() {
    console.log(config.api);
  }
};
module.exports = utils;