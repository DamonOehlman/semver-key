var semver = require('semver');

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
var pack = module.exports = function(version) {
  var parts;

  // ensure we have a valid version, or default to 0.0.0
  version = semver.valid(version) || '0.0.0';

  // extract the parts and convert to numeric values
  parts = parts.split('.').map(function(part) {
    return +part;
  });

  console.log(parts);
};
