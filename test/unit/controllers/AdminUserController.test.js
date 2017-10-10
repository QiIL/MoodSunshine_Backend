/**
 * Created by qill on 17-10-06.
 */

var should = require('should');
var request = require('superagent');
var AdminUserCommon = require('../common/AdminUser');

describe("AdminUserController test", function () {
	describe("action: login", function () {
		var agent = request.agent();
		it('should be login success!', function (done) {
			var user_info = {
				username: "qill",
				password: "123456"
			};
			AdminUserCommon.login(agent, user_info, function (err, res) {
				should.not.exist(err);
				res.statusCode.should.match(200);
				done(err);
			})
		})
	})
})