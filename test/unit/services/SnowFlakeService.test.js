/**
 * create by qill on 2017-10-10
 */
let should = require('should');
let request = require('superagent');
let SnowFlakeService = require('../../../api/services/SnowFlakeService');

describe.only("Service: SnowFlakeService", function () {
	it("should create many different id", function (done) {
		for (let i = 0; i < 10; i++) {
			console.log(SnowFlakeService.SnowflakeIdWorker())
		}
		let id1 = SnowFlakeService.SnowflakeIdWorker();
		let id2 = SnowFlakeService.SnowflakeIdWorker();
		console.log(id1)
		console.log(id2)
		let a = parseInt(id1,16);
		let b = parseInt(id2,16);
		let judge = a > b;
		judge.should.equal(false);
		id1.should.not.equal(id2);
		done();
	})
})