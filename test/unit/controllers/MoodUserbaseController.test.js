/**
 * Created by qill on 17-10-06.
 */

const should = require('should');
const request = require('superagent');
const MoodUserBase = require('../common/MoodUserbase');

describe("Controller: MoodUserbase", function () {
	let agent = request.agent();
	describe("action: login", function () {
		it('should be login success!', function (done) {
			let user_info = {
				mood_username: "qill",
				mood_password: "123456"
			};
			MoodUserBase.login(agent, user_info, function (err, res) {
				should.not.exist(err);
				res.statusCode.should.match(200);
				done(err);
			})
		})
	})
	describe("action: create", function () {
		it('should be create success!',  (done) => {
			let user_info = {
				mood_nickname: "ImTest",
				mood_username: "test",
				mood_password: "123456"
			};
			agent.post(sails.getBaseUrl() + '/api/v1/MoodUserbase')
				.send(user_info)
				.end((err, res) => {
					should.not.exist(err)
					res.status.should.equal(201)
					done()
				})
		})
	})
})