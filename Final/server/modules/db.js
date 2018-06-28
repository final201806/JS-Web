let mysql = require('mysql');
let pool = mysql.createPool({
	host: 'localhost',
	user: 'root',
	password: '123456',
	database: 'js'
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
					callback(error);
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
					callback(error);
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
					callback(error);
				}
				else {
					callback(null, result);
				}
				connection.release();
			});
		}
	});
};

//发帖
exports.addPost = function (postParams, callback) {
	pool.getConnection(function (error, connection) {
		if (error) {
			callback(error, null);
		}
		else {
			let sql = 'INSERT INTO post(title,content,authorName,createTime) VALUES(?,?,?,?)';
			connection.query(sql, postParams, function (error, result) {
				if (error) {
					callback(error, null);
				}
				else {
					callback(null, result);
				}
				connection.release();
			});
		}
	});
};

//删帖
exports.deletePost = function (postParams, callback) {
	pool.getConnection(function (error, connection) {
		if (error) {
			callback(error, null);
		}
		else {
			let sql = 'DELETE FROM post WHERE id=?';
			connection.query(sql, postParams, function (error, result) {
				if (error) {
					callback(error, null);
				}
				else {
					callback(null, result);
				}
				connection.release();
			});
		}
	});
};

//改贴
exports.updatePost = function (postParams, callback) {
	pool.getConnection(function (error, connection) {
		if (error) {
			callback(error, null);
		}
		else {
			let sql = 'UPDATE post SET title=?,content=?,createTime=? WHERE id=?';
			connection.query(sql, postParams, function (error, result) {
				if (error) {
					callback(error, null);
				}
				else {
					callback(null, result);
				}
				connection.release();
			});
		}
	});
};

//帖子具体内容
exports.queryPost = function (postParams, callback) {
	pool.getConnection(function (error, connection) {
		if (error) {
			callback(error, null);
		}
		else {
			let sql = 'SELECT * FROM post WHERE id=?';
			connection.query(sql, postParams, function (error, result) {
				if (error) {
					callback(error, null);
				}
				else {
					callback(null, result);
				}
				connection.release();
			});
		}
	});
};

//用户个人主页帖子列表
exports.queryPostByUsername = function (postParams, callback) {
	pool.getConnection(function (error, connection) {
		if (error) {
			callback(error, null);
		}
		else {
			let sql = 'SELECT * FROM post WHERE authorName = ? ORDER BY createTime desc limit 4';
			connection.query(sql, postParams, function (error, result) {
				if (error) {
					callback(error, null);
				}
				else {
					callback(null, result);
				}
				connection.release();
			});
		}
	});
};

//主页帖子列表
exports.queryPostList = function (pageId, callback) {
	pool.getConnection(function (error, connection) {
		if (error) {
			callback(error, null);
		}
		else {
			let sql = 'SELECT * FROM post ORDER BY createTime desc limit ?, 5';
			connection.query(sql, (pageId - 1) * 5, function (error, result) {
				if (error) {
					callback(error, null);
				}
				else {
					callback(null, result);
				}
				connection.release();
			});
		}
	});
};

exports.countPosts = function(callback) {
	pool.getConnection(function (error, connection) {
		if (error) {
			callback(error, null);
		}
		else {
			let sql = 'SELECT COUNT(*) AS number FROM post';
			connection.query(sql, function (error, result) {
				if (error) {
					callback(error, null);
				}
				else {
					callback(null, result);
				}
				connection.release();
			});
		}
	});
};

//添加评论
exports.addComment = function (commentParams, callback) {
	pool.getConnection(function (error, connection) {
		if (error) {
			callback(error, null);
		}
		else {
			let sql = 'INSERT INTO comment(content,authorName,createTime,postId) VALUES(?,?,?,?)';
			connection.query(sql, commentParams, function (error, result) {
				if (error) {
					callback(error, null);
				}
				else {
					callback(null, result);
				}
				connection.release();
			});
		}
	});
};

//删除评论
exports.deleteComment = function (commentParams, callback) {
	pool.getConnection(function (error, connection) {
		if (error) {
			callback(error, null);
		}
		else {
			let sql = 'DELETE FROM comment WHERE id=?';
			connection.query(sql, commentParams, function (error, result) {
				if (error) {
					callback(error, null);
				}
				else {
					callback(null, result);
				}
				connection.release();
			});
		}
	});
};

//更新评论
exports.updateComment = function (commentParams, callback) {
	pool.getConnection(function (error, connection) {
		if (error) {
			callback(error, null);
		}
		else {
			let sql = 'UPDATE comment SET content=?,createTime=? WHERE id=?';
			connection.query(sql, commentParams, function (error, result) {
				if (error) {
					callback(error, null);
				}
				else {
					callback(null, result);
				}
				connection.release();
			});
		}
	});
};

//具体帖子内评论
exports.queryComment = function (commentParams, callback) {
	pool.getConnection(function (error, connection) {
		if (error) {
			callback(error, null);
		}
		else {
			let sql = 'SELECT * FROM comment WHERE postId=? limit ?, 6';
			connection.query(sql, commentParams, function (error, result) {
				if (error) {
					callback(error, null);
				}
				else {
					callback(null, result);
				}
				connection.release();
			});
		}
	});
};

//用户个人主页评论列表
exports.queryCommentByUsername = function (commentParams, callback) {
	pool.getConnection(function (error, connection) {
		if (error) {
			callback(error, null);
		}
		else {
			let sql = 'SELECT * FROM comment WHERE authorName = ? ORDER BY createTime desc limit 4';
			connection.query(sql, commentParams, function (error, result) {
				if (error) {
					callback(error, null);
				}
				else {
					callback(null, result);
				}
				connection.release();
			});
		}
	});
};

exports.countComments = function (postId, callback) {
	pool.getConnection(function (error, connection) {
		if (error) {
			callback(error, null);
		}
		else {
			let sql = 'SELECT COUNT(*) AS number FROM comment WHERE postId = ?';
			connection.query(sql, postId, function (error, result) {
				if (error) {
					callback(error, null);
				}
				else {
					callback(null, result);
				}
				connection.release();
			});
		}
	});
};
