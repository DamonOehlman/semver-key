var async = require('async');
var leveldown = require('leveldown');
var key = require('..');
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
