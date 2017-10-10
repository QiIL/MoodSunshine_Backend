/**
 * Created by qill on 17-10-05.
 */

var should = require('should');
var request = require('superagent');

describe.skip("ok Response test !", function() {
  it("should response ok view !", function(done) {
    request.get(sails.getBaseurl()+"/api/v1/response/ok")
      .end(function(err,res){
        res.statusCode.should.match(200);
        done() ;
      }) ;
  });
});
