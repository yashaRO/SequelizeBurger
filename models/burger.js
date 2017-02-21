var orm = require('../config/orm')

var burgers = {
	all: function(cb) {
		orm.all('burgers', function(res) {
			cb(res)
		})
	},
	create: function(values, cb) {
		orm.insert('burgers', ['burger_name'], values, function(res) {
			cb(res)
		})
	},
	update: function(setArgs, whereValues, cb) {
		orm.update('burgers', setArgs, 'id', whereValues, function(res) {
			cb(res)
		})
	}
}

module.exports = burgers;