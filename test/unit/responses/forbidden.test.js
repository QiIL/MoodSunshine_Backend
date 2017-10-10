/**
 * Created by qill on 17-10-05.
 */

var should = require('should');
var request = require('superagent');

describe.skip("forbidden Response test !", function() {
  it("should response forbidden view !", function(done) {
    request.get(sails.getBaseurl()+"/api/v1/response/forbidden")
      .end(function(err,res){
        res.statusCode.should.match(403);
        done() ;
      }) ;
  });
});