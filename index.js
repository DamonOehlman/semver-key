var lexinum = require('lexinum');
var semver = require('semver');
var MAXVAL = Math.pow(2, 16);

/**
  # semver-key

  This is a simple package that is designed to be able to pack and unpack
  semver strings into lexigraphically sortable strings.

  ## Why?

  This is very similar to the
  [padded-semver](https://github.com/dominictarr/padded-semver) package with
  the following differences:

  - At this stage, `semver-key` only supports the `major.minor.release`
    components of a semantic version.

  - The packed output of `semver-key` is lexicographic sorted such that the
    latest version will always be the first entry found in something like
    leveldb.  Basically, if `a` > `b` from a semver sense, the packed order
    will be `b` < `a`.
**/
var key = module.exports = function(version) {
  var parts;
  var value = 0;
  var invalid = false;

  if (typeof version == 'number') {
    version = (version | 0) + '.0.0';
  }

  if (! version) {
    return null;
  }

  // extract the parts and convert to numeric values
  parts = new Uint16Array(('' + version).split('.').map(function(part) {
    var val = +part;

    invalid = invalid || isNaN(val) || (val > MAXVAL);
    return ~val;
  }));

  if (invalid) {
    return null;
  }

  for (var ii = 0; ii < parts.length; ii++) {
    value = value * (ii > 0 ? MAXVAL : 1) + parts[ii];
  }

  return lexinum(value);
};

key.unpack = function(input) {
  var value = lexinum.unpack(input);
  var parts = new Uint16Array([
    ~(value / (MAXVAL * MAXVAL)),
    ~(value / MAXVAL),
    ~value
  ]);

  return parts[0] + '.' + parts[1] + '.' + parts[2];
};
