var slimver = require('slimver');
var lexinum = require('lexinum');

/**
  # slimver-key

  This is a simple package that is designed to be able to pack and unpack
  [slimver](https://github.com/DamonOehlman/slimver-spec) strings into
  lexigraphically sortable strings.

  ## Example Usage

  Consider the following example showing how a `semver-key` packed value can
  be used in a leveldb instance:

  <<< examples/leveldown.js
**/
var key = module.exports = function(version) {
  return lexinum(slimver.invert(slimver(version)));
};

key.unpack = function(input) {
  return slimver.stringify(slimver.invert(lexinum.unpack(input)));
};
