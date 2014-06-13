# semver-key

This is a simple package that is designed to be able to pack and unpack
semver strings into lexigraphically sortable strings.


[![NPM](https://nodei.co/npm/semver-key.png)](https://nodei.co/npm/semver-key/)

[![experimental](https://img.shields.io/badge/stability-experimental-red.svg)](https://github.com/badges/stability-badges) [![Build Status](https://img.shields.io/travis/DamonOehlman/semver-key.svg?branch=master)](https://travis-ci.org/DamonOehlman/semver-key) 

## Why?

This is very similar to the
[padded-semver](https://github.com/dominictarr/padded-semver) package with
the following differences:

- `semver-key` only supports the `major.minor.release`
  components of a semantic version.

- The packed output of `semver-key` is lexicographic sorted such that the
  latest version will always be the **first** entry found in something like
  leveldb.  Basically, if `a` > `b` from a semver sense, the packed order
  will be `b` < `a`.

- The maximum value for an individual version component is `65535` (i.e.
  the most significant version supported by `semver-key` is
  `65535.65535.65535`).

## Example Usage

Consider the following example showing how a `semver-key` packed value can
be used in a leveldb instance:

```js
var async = require('async');
var leveldown = require('leveldown');
var key = require('semver-key');
var db = leveldown(__dirname + '/data');

// initialise a few test versions
var testVersions = [
  '0.0.1',
  '204.3.2',
  '1.4.0',
  '5.3.2',
  '10.34.2',
  '8.2.3',
  '3.2.4',
  '5.34.234'
];

function findLatest() {
  var iterator = db.iterator({ key: 'foo', limit: 1 });

  iterator.next(function(err, key, value) {
    console.log('the latest version of foo found was: ' + value);
  });
}

function insertItems(err) {
  if (err) {
    return console.error('could not open db');
  };

  async.forEach(testVersions, insertVersion, function(err) {
    if (err) {
      return console.error('error inserting verions data');
    }

    findLatest();
  });
}

function insertVersion(version, callback) {
  db.put('foo!' + key(version), version, callback);
}

// clean the data directory before starting
leveldown.destroy(__dirname + '/data', function(err) {
  if (err) {
    return console.error('could not clean data dir');
  };

  db.open(insertItems);
});

```

## License(s)

### MIT

Copyright (c) 2014 Damon Oehlman <damon.oehlman@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
