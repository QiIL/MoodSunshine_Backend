/**
 * Created by qill on 17-10-05.
 */

var should = require('should');
var request = require('superagent');

describe.skip("serverError Response test !", function() {
  it("should response serverError view !", function(done) {
    request.get(sails.getBaseurl()+"/api/v1/response/serverError")
      .end(function(err,res){
        res.text.should.match(/E_VIEW_FAILED/);
        done() ;
      }) ;
  });
});
