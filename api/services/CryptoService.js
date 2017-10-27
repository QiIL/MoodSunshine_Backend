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
	 * @param {string} data 明文数据
	 * @param {number} length 哈希长度
	 * @return {string}
	 */
	hash: (data, length=256) => {
		return new Promise((resolve, reject) => {
			try {
				const shaBase = "SHA3-" + length.toString()
				let shaObj = new jsSHA(shaBase, "TEXT")
				shaObj.update(data)
				resolve(shaObj.getHash('HEX'))
			} catch (error) {
				return reject(error)
			}
		})
	}
}