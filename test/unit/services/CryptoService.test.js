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
		buf.should.be.instanceof(String)
	})
	it("should hash data success", async () => {
		let data = "123456"
		data = await CryptoService.hash(data)
		data.should.be.equal('d7190eb194ff9494625514b6d178c87f99c5973e28c398969d2233f2960a573e')
	})
})