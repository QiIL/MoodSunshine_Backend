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
		// 用户id
		mood_userid: {
			type: "integer",
			required: true,
			unique: true
		},
		// 用户盐值
		mood_salt: {
			type: "String",
			required: true
		},
		// 创建时间
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