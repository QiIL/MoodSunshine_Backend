/**
 * create by qill on 17-10-05
 */

var crypto = require('crypto');

module.exports = {
	/**
	 * 密码加密
	 * @param data
	 * @param key
	 * @return {string}
	 */
	encrypt: function (data, key) {
		var cipher = crypto.createCipher("bf", key);
		var newPsd = "";
		newPsd += cipher.update(data, "utf8", "hex");
		newPsd += cipher.final("hex");
		return newPsd;
	},

	/**
	 * 密码解密
	 * @param data
	 * @param key
	 * @return {string}
	 */
	decrypt: function (data, key) {
		var decipher=crypto.createDecipher("bf", key);
		var oldPsd = "";
		oldPsd += decipher.update(data, "hex", "utf8");
		oldPsd += decipher.final("utf8");
		return oldPsd;
	}
}