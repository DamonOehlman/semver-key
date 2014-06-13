# semver-key

This is a simple package that is designed to be able to pack and unpack
semver strings into lexigraphically sortable strings.


[![NPM](https://nodei.co/npm/semver-key.png)](https://nodei.co/npm/semver-key/)

[![experimental](https://img.shields.io/badge/stability-experimental-red.svg)](https://github.com/badges/stability-badges) [![Build Status](https://img.shields.io/travis/DamonOehlman/semver-key.svg?branch=master)](https://travis-ci.org/DamonOehlman/semver-key) 

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
