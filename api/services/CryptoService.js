/**
 * create by qill on 17-10-05
 */

const crypto = require('crypto');
const uuidv4 = require('uuid/v4');
const jsSHA = require('jssha')

module.exports = {
	
	/**
	 * 密码加密
	 * @param data
	 * @param key
	 * @return {string}
	 */
	encrypt: (data, key) => {
		return new Promise((resolve, reject) => {
			try {
				let cipher = crypto.createCipher("bf", key);
				let newPsd = "";
				newPsd += cipher.update(data, "utf8", "hex");
				newPsd += cipher.final("hex");
				return resolve(newPsd);
			} catch (error) {
				return reject(error)
			}
		})
	},

	/**
	 * 密码解密
	 * @param data
	 * @param key
	 * @return {string}
	 */
	decrypt: (data, key) => {
		return new Promise((resolve, reject) => {
			try {
				let decipher=crypto.createDecipher("bf", key);
				let oldPsd = "";
				oldPsd += decipher.update(data, "hex", "utf8");
				oldPsd += decipher.final("utf8");
				return resolve(oldPsd);
			} catch (error) {
				return reject(error)
			}
		})
	},

	/**
	 * 哈希
	 * @param password
	 * @param salt
	 * @return {string}
	 */
	hashPassword: (password, salt) => {
		return new Promise((resolve, reject) => {
			try {
				let saltObj = new jsSHA("SHA3-224", "TEXT")
				let passwordObj = new jsSHA("SHA3-256", "TEXT")
				saltObj.update(salt)
				const hashSalt = saltObj.getHash("HEX")
				passwordObj.update(password+hashSalt)
				resolve(passwordObj.getHash('HEX'))
			} catch (error) {
				return reject(error)
			}
		})
	}
}