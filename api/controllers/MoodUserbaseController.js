/**
 * create by qill on 17-10-05
 */

 'use strict';

const Joi = require('joi');

module.exports = {

	/**
	 * create
	 * @param req
	 * @param res
	 * @return {*}
	 */
	create: async (req, res) => {
		const schema = Joi.object({
			mood_username: Joi.string().length(80).required(),
			mood_nickname: Joi.string().length(40).required(),
			mood_password: Joi.string().length(1024).required()
		})
		try {
			let regData = await ParamValidateService.validate(schema, req.body)
			// 生成盐值
			const salt = await CryptoService.hash(Math.random().toString(36).substr(2))
			const encrypt_password = await CryptoService.hashPassword(regData.mood_password+salt)
			regData.mood_password = encrypt_password
			// 创建用户, 创建用户盐值对照表
			await MoodUserbaseService.create(regData)
			let thisUser = await MoodUserbase.findOne({mood_username: regData.mood_username})
			await MoodUserSalt.create({mood_userid: thisUser.mood_userid, mood_salt: salt,})
			return res.created("User" + regData.username + "Created")
		} catch (error) {
			return res.badRequest(error.message)
		}
	},

	/**
   * login
   * @param req
   * @param res
   * @returns {*}
   */
	login: async (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    if (!username || !password) {
      return res.json({code: -1, message: "username and password is require!"});
    }
    let encrypt_password = CryptoService.encrypt(password, sails.config.auth.security.encryptKey);
    MoodUserbase.findOne({'mood_username': username, 'mood_password': encrypt_password}).exec(function (err, user) {
      if (!err && user) {
				_.omit(user, ['mood_password']);
				req.session.adminlogined = true;
				req.session.adminUserInfo = user;
				res.ok({message: "login success!", data: user});
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
  logout: async (req, res) => {
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