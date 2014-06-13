var test = require('tape');
var key = require('../');

test('0.0.0', function(t) {
  t.plan(1);
  t.equal(key.unpack('P0281474976710655'), t.name);
});

test('0.0.1', function(t) {
  t.plan(1);
  t.equal(key.unpack('P0281474976710654'), t.name);
});

test('0.1.0', function(t) {
  t.plan(1);
  t.equal(key.unpack('P0281474976645119'), t.name);
});

test('1.0.0', function(t) {
  t.plan(1);
  t.equal(key.unpack('P0281470681743359'), t.name);
});

test('1.0.1', function(t) {
  t.plan(1);
  t.equal(key.unpack('P0281470681743358'), t.name);
});

test('23123.2343.344', function(t) {
  t.plan(1);
  t.equal(key.unpack('P0182162294374055'), t.name);
});
