/**
 * AdminUser
 * @description :: 用户对象
 */

'use strict';

module.exports = {
	schema: true,
	tableName: 'mood_userbase',
	meta: {
		shcemaName: 'public'
	},
	// identity: 'user',
	connection: 'localPostgresqlServer',
	
	attributes: {
		// 登录名称
		mood_username: {
			type: "String",
			required: true,
			unique: true
		},
		// 用户密码
		mood_password: {
			type: "String",
			required: true
		},
		// 用户名字
		mood_name: {
			type: "String",
			required: true,
			defaultsTo: ""
		},

		createdAt: {
			type: "datetime",
			required: true,
      defaultsTo: new Date()
    },
    updatedAt: {
			type: "datetime",
			required: true,
      defaultsTo: new Date()
    }
	},

	beforeUpdate: function (values, next) {
    next();
  },

  beforeCreate: function (values, next) {
    next();
  }
}