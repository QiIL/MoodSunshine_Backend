/**
 * create by qill on 17-10-05
 */

 'use strict';

var Joi = require('joi');

module.exports = {

	/**
	 * create
	 * @param req
	 * @param res
	 * @return {*}
	 */
	create: function (req, res) {
		var schema = Joi.object({
			name: Joi.string(),
			username: Joi.string().required(),
			password: Joi.string().required()
		})
		schema.validate(req.body, function (err, regData) {
			// regData.mood_userid = 
			if (err) { return res.badRequest(err.details[0].message); }
			
			var encrypt_password = CryptoService.encrypt(regData, sails.config.auth.security.encryptKey);
			_.omit(regData, ['password']);
			regData = _.extend({ password: encrypt_password }, regData)
			AdminUser.create(regData).exec(function (err) {
				if (err) { return res.serverError(err) }

				return res.created("User" + regData.username + "Created");
			});
		})
	},

	/**
   * login
   * @param req
   * @param res
   * @returns {*}
   */
  login: function (req, res) {
    var username = req.body.username;
    var password = req.body.password;
    if (!username || !password) {
      return res.json({code: -1, message: "username and password is require!"});
    }
    var encrypt_password = CryptoService.encrypt(password, sails.config.auth.security.encryptKey);
    AdminUser.findOne({'username': username, 'password': encrypt_password}).exec(function (err, user) {
      if (!err && user) {
        AdminUser.findOne({'id': user.superior_id}).exec(function (err, result_superior) {
					if (!err && result_superior) {
						delete result_superior.password;
						user.superior = result_superior;
					}
					req.session.adminlogined = true;
					req.session.adminUserInfo = user;
					delete user.password;
					res.ok({message: "login success!", data: user});
				}
        );
      } else {
        res.forbidden({message: "用户名或密码错误"});
      }
    });
  },

  /**
   * 退出登录
   * @param req
   * @param res
	 * @return {*}
   */
  logout: function (req, res) {
    req.session.adminlogined = false;
    req.session.adminUserInfo = '';
    res.ok({message: "logout success!"});
  },
	/**
   * Overrides for the settings in `config/controllers.js`
   * (specific to ReportsController)
   */
  _config: {
    rest: true,
    actions: true,
    shortcuts: true
  }
}