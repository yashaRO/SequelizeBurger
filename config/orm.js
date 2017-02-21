var connection = require('./connection')

function insertFormatting(arr) {
	c = '('
	for(let i =0; i < arr.length; i++) {
		if (typeof arr[i] == 'string')
			{c += '"' + arr[i] + '",'; continue;}
		c += arr[i] +','
	}
	c = c.replace(/,$/,'')
	c += ')'
	return c
}

function setSql(ob) {
	
	var arr = [];
	
	for(var key in ob) {
		if (Object.hasOwnProperty.call(ob,key)) {
			arr.push(key + ' = ' + (typeof ob[key] == 'string' ? "'" + ob[key] + "'" : ob[key]))
		}
	}
	return arr.toString()
}

orm = {
  all: function(table, cb){
    connection.query(`SELECT * FROM ${table};`, function(err, result) {
      if (err) throw err;
			cb(result)
    })
  },
  insert: function(table, cols, values, cb){
    connection.query(`INSERT INTO ${table} (${cols.toString()}) VALUES ${insertFormatting(values)};`, function(err, result) {
      //Expects full values, with null being in place of auto generated values. Duh
      if (err) throw err;
			cb(result)
    })
  },
  update: function(table, setArgs, whereKey, whereValue, cb){
    connection.query(`UPDATE ${table} SET ${setSql(setArgs)} WHERE ${whereKey} = ${whereValue};`, function(err, result) {
      if (err) throw err;
			cb(result)
    })
  }
}

module.exports = orm;