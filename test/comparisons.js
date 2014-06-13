var semver = require('semver');
var test = require('tape');
var key = require('..');

var comparisons = [
  [ '0.0.0', '0.0.1' ],
  [ '0.0.1', '0.0.2' ],
  [ '0.0.0', '0.1.0' ],
  [ '0.0.1', '0.1.0' ],
  [ '0.1.0', '0.1.1' ]
];

comparisons.forEach(function(items) {
  test(items[0] + ' vs ' + items[1], function(t) {
    var packed = items.map(key);

    t.plan(2);

    // semver is lt
    t.ok(semver.lt(items[0], items[1]));

    // semver-key is reverse
    t.ok(packed[0] > packed[1]);
  });
});
