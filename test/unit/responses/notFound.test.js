/**
 * Created by qill on 17-10-05.
 */

var should = require('should');
var request = require('superagent');

describe.skip("notFound Response test !", function() {
  it("should response notFound view !", function(done) {
    request.get(sails.getBaseurl()+"/api/v1/response/notFound")
      .end(function(err,res){
        res.statusCode.should.match(404);
        done() ;
      }) ;
  });
});
