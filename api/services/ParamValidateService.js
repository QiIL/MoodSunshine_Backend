/**
 * create by qill on 2017-10-15
 * validate params
 */

const Joi = require('joi')

module.exports = {
	validate: (schema, params) => {
		return new Promise((resolve, reject) => {
			schema.validate(params, (err, data) => {
				if (err) {
					return reject(err.details[0])
				}
				return resolve(data)
			})
		})
	}
}