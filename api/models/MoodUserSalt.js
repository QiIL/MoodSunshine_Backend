/**
 * MoodUserSalt
 * @description :: 用户盐值
 */

'use strict';

module.exports = {
	schema: true,
	tableName: 'mood_usersalt',
	meta: {
		shcemaName: 'public'
	},
	// identity: 'user',
	connection: 'localPostgresqlServer',
	
	attributes: {
		// 登录名称
		mood_userid: {
			type: "String",
			required: true,
			unique: true
		},
		// 用户密码
		mood_salt: {
			type: "String",
			required: true
		},
		// 用户名字
		mood_id: {
			type: "String",
			required: true,
			defaultsTo: ""
		},
		createdAt: {
			type: "bigint",
			required: true,
      defaultsTo: new Date().getTime()
    },
	},

	beforeUpdate: function (values, next) {
    next();
  },

  beforeCreate: function (values, next) {
    next();
  }
}