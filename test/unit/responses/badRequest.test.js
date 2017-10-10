/**
 * Created by qill on 17-10-05.
 */

var should = require('should');
var request = require('superagent');

describe.skip("badRequest Response test !", function() {
  it("should response bad request view !", function(done) {
    request.get(sails.getBaseurl()+"/api/v1/response/badRequset")
      .end(function(err,res){
        res.statusCode.should.match(400);
        done();
      });
  });
});

