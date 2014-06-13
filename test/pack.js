var test = require('tape');
var key = require('../');

test('0.0.0', function(t) {
  t.plan(1);
  t.equal(key(t.name), 'P0281474976710655');
});

test('0.0.1', function(t) {
  t.plan(1);
  t.equal(key(t.name), 'P0281474976710654');
});
