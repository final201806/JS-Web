let mysql = require('mysql');
let pool = mysql.createPool({
	host: 'localhost',
	user: 'root',
	password: '123456',
	database: 'test'
});


//Register
exports.addUser = function (addParams, callback) {
	pool.getConnection(function (error, connection) {
		if (error) {
			console.log('Register ERROR:' + error.message);
			callback(error, null);
		}
		else {
			let querySql = 'SELECT * FROM user WHERE username = ?';
			connection.query(querySql, addParams[0], function (error, result) {
				if (error) {
					callback(error, null);
				}
				else {
					if (result.length === 0) {
						let sql = 'INSERT INTO user(username,password) VALUES(?,?)';
						connection.query(sql, addParams, function (error, result) {
							if (error) {
								callback(error, null);
							}
							else {
								console.log('INSERT ID:', result);
								callback(null, result);
							}
						});
					}
					else {
						callback(null, null);
					}
				}
				connection.release();
			});
		}
	});
};

//Login
exports.checkPwd = function (username, callback) {
	pool.getConnection(function (error, connection) {
		if (error) {
			callback(error, null);
		}
		else {
			let sql = 'SELECT password FROM user WHERE username = ?';
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
};

//用户详细信息
exports.queryUser = function (username, callback) {
	pool.getConnection(function (error, connection) {
		if (error) {
			callback(error, null);
		}
		else {
			let sql = 'SELECT username, email, profile FROM user WHERE username = ?';
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
};

//编辑用户信息
exports.updateUser = function (updateParams, callback) {
	pool.getConnection(function (error, connection) {
		if (error) {
			callback(error, null);
		}
		else {
			let sql = 'UPDATE user SET email = ?, profile = ? WHERE username = ?';
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
};

//注册查询
exports.userIsExited = function (username, callback) {
	pool.getConnection(function (error, connection) {
		if (error) {
			callback(error, null);
		}
		else {
			let sql = 'SELECT username FROM user WHERE username = ?';
			connection.query(sql, username, function (error, result) {
				if (error) {
					callback(error, result);
				}
				else {
					// console.log('checkPwd:' + result[0].password);
					callback(null, result);
				}
				connection.release();
			});
		}
	});
};


//增加聊天记录
exports.addChat = function (chatRecord, callback) {
	pool.getConnection(function (error, connection) {
		if (error) {
			callback(error, null);
		}
		else {
			let sql = 'INSERT INTO chat(client,msg,time) VALUES(?,?,?)';
			connection.query(sql, chatRecord, function (error, result) {
				if (error) {
					callback(error, result);
				}
				else {
					callback(null, result);
				}
				connection.release();
			});
		}
	});
};

//获取最近10条聊天记录
exports.queryChat = function (callback) {
	pool.getConnection(function (error, connection) {
		if (error) {
			callback(error, null);
		}
		else {
			let sql = 'SELECT * FROM chat ORDER BY time desc limit 10';
			connection.query(sql, function (error, result) {
				if (error) {
					callback(error, result);
				}
				else {
					callback(null, result);
				}
				connection.release();
			});
		}
	});
};