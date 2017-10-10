/**
 * create by qill on 2017-10-10
 */
let should = require('should');
var request = require('superagent');
let SnowFlakeService = require('../../../api/services/SnowFlakeService');

describe("Service: SnowFlakeService", function () {
	it("should create many different id", function (done) {
		let idmake = new SnowFlakeService.SnowflakeIdWorker();
		let id1 = idmake.nextId();
		let id2 = idmake.nextId();
		let a = parseInt(id1,16);
		let b = parseInt(id2,16);
		let judge = a > b;
		judge.should.equal(false);
		id1.should.not.equal(id2);
		done();
	})
})