var mysql = require('mysql');
var pool = mysql.createPool({
	host: 'localhost',
	user: 'root',
	password: '123456',
	database: 'test'
});

function hasUser() {

}

// connection.connect();

exports.Test = function () {
	connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
		if (error) throw error;
		console.log('The solution is: ', results[0].solution);
		return results[0].solution;
	});
}

exports.addUser = function (addParams, callback) {
	pool.getConnection(function (error, connection) {
		if (error) {
			console.log('INSERT ERROR:' + error.message);
			callback(error, null);
		}
		else {
			var sql = 'INSERT INTO user(username,password) VALUES(?,?)';
			connection.query(sql, addParams, function (error, result) {
				if (error) {
					callback(error, null);
				}
				else {
					connection.log('INSERT ID:', result);
					callback(error, result);
				}
			});
		}
	});

}

exports.checkPwd = function (username, callback) {
	pool.getConnection(function (error, connection) {
		if (error) {
			callback(error, null);
		}
		else {
			var sql = 'SELECT password FROM user WHERE username = ?';
			connection.query(sql, username, function (error, result) {
				if (error) {
					callback(error, result[0]);
				}
				else {
					// console.log('checkPwd:' + result[0].password);
					callback(null, result[0]);
				}
				connection.release();
			});
		}
	});
}

exports.queryUser = function () {

}

exports.updateUser = function () {

}