/**
 * Created by qill on 17-10-05.
 */


const should = require('should');
const request = require('superagent');
const CryptoService = require('../../../api/services/CryptoService');
const encryptKey = require('../../../config/auth').auth.security.encryptKey

describe("Service: CtyptoService", (req, res) => {
	it("should encrypt success", async () => {
		let buf = "Ohbep9"
		buf = await CryptoService.encrypt(buf, encryptKey)
		console.log(buf)
		buf.should.be.instanceof(String)
	})
})