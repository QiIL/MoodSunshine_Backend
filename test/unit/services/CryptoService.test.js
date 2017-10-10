/**
 * Created by qill on 17-10-05.
 */


var should = require('should');
var request = require('superagent');
var CryptoService = require('../../../api/services/CryptoService');
var encryptKey = require('../../../config/auth').auth.security.encryptKey

describe("Service: CtyptoService", function (req, res) {
	it("should encrypt success", function (done) {
		var buf = "Ohbep9"
		buf = CryptoService.encrypt(buf, encryptKey)
		buf.should.be.instanceof(String)
		done()
	})
})