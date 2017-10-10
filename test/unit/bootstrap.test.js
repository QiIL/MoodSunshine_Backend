var Sails = require('sails');
var Barrels = require('barrels');

require('should');

// Global before hook
before(function (done) {
  this.timeout(30000);
  // Lift Sails with test database
  Sails.lift({
  // configuration for testing purposes
    hooks: {
      // Skip grunt
      "grunt": false,
      "pubsub":false,
      "sockets": false
    }
  },function (err, sails) {
    if (err)
      return done(err);
    // Load fixtures
    var barrels = new Barrels();

    // Save original objects in `fixtures` variable
    fixtures = barrels.data;

    // Populate the DB 
    barrels.populate(function (err) {
      done(err, sails);
    });
  });
});

// Global after hook
after(function (done) {
  sails.log.verbose(); // Skip a line before displaying Sails lowering logs
  sails.lower(function () {
    done();
  });
});
