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

test('0.1.0', function(t) {
  t.plan(1);
  t.equal(key(t.name), 'P0281474976645119');
});

test('1.0.0', function(t) {
  t.plan(1);
  t.equal(key(t.name), 'P0281470681743359');
});

test('1.0.1', function(t) {
  t.plan(1);
  t.equal(key(t.name), 'P0281470681743358');
});

test('123123.2343.344', function(t) {
  t.plan(1);
  t.equal(key(t.name), 'P0034140541484711');
});
