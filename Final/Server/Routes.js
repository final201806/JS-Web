let DB = require('./modules/db');

// console.log(DB.Test())

module.exports = function (app) {
	app.get('', function (request, response) {
		response.render('index', request);
	});
	app.get('/index', function (request, response) {
		response.render('index', request);
	});
	app.get("/chat", function (request, response) {
		if (request.session.user == null) {
			response.redirect('/login');
		}
		else {
			// response.writeHead(200, { 'Content-Type': 'application/html' });
			response.render('chat');
		}
	});
	app.get("/login", function (request, response) {
		response.render('login');
	});
	app.post("/login", function (request, response) {
		let username = request.body.username;
		let pwd = request.body.pwd;
		DB.checkPwd(username, function (error, result) {
			if (error) {
				console.log('Error:' + error);
			}
			else {
				if (result.password === pwd) {
					//设置cookie
					response.cookie("user", {username: username}, {maxAge: 600000 , httpOnly: false});
					//设置session
					request.session.user = {'username': username};

					response.redirect('/index');
				} else {
					request.error = '用户名密码错误';
					response.render('login', request);
				}
			}
		});

	});
	app.get('/logout', function(request,response){
		request.session.user = null;
		response.clearCookie('user');

		response.redirect('/login');
	});
	app.get('/register', function (request,response) {
		response.render('register');
	});
	app.post('/register', function (request,response) {
		let username = request.body.username;
		let pwd = request.body.pwd;
		DB.addUser([username, pwd], function (error, result) {
			if (error || result === null) {
				response.json({code: 400});
			}
			else {
				response.json({code: 200});
			}
		});
	});
	app.post('/isExisted', function (request, response) {
		let username = request.body.username;
		DB.userIsExited(username, function (error, result) {
			if (error) {
				response.json({code: 400});
			}
			else {
				if (result.length !== 0) {
					response.json({code: 221});
				}
				else {
					response.json({code: 200});
				}
			}
		})
	});

	app.get('/forum', function (request, response) {
		response.render('post', request);
	});
	app.post('/post', function (request, response) {
		let postTitle = request.body.postTitle;
		let postContent = request.body.postContent;
		let postAuthorName = request.body.postAuthorName;//改session获取
		let postCreateTime = new Date();
		DB.addPost([postTitle, postContent, postAuthorName, postCreateTime], function (error, result) {
			if (error) {
				response.json({code: 400});
			}
			else {
				response.json({code: 200});
			}
		});
	});
	app.delete('/post', function (request, response) {
		let postId = request.body.postId;
		DB.deletePost(postId, function (error, result) {
			if (error) {
				response.json({code: 400});
			}
			else {
				response.json({code: 200});
			}
		});
	});
	app.put('/post', function (request, response) {
		let postTitle = request.body.postTitle;
		let postContent = request.body.postContent;
		let postCreateTime = new Date();
		let postId = request.body.postId;
		DB.updatePost([postTitle, postContent, postCreateTime, postId], function (error, result) {
			if (error) {
				response.json({code: 400});
			}
			else {
				response.json({code: 200});
			}
		});
	});
	app.get('/post', function (request, response) {
		let postId = request.query.postId;
		DB.queryPost(postId, function (error, result) {
			if (error) {
				response.json({code: 400});
			}
			else {
				if (result.length !== 0)
					response.json(result[0]);
			}
		});
	});
	app.get('/postList', function (request, response) {
		DB.queryPostList(function (error, result) {
			if (error) {
				response.json({code: 400});
			}
			else {
				if (result.length !== 0) {
					response.json(result);
				}
			}
		});
	});
	app.get('/userPostList', function (request, response) {
		if (request.session.user == null) {
			response.redirect('/login');
		}
		else {
			let authorName = request.session.user.username;
			DB.queryPostByUsername(authorName, function (error, result) {
				if (error) {
					response.json({code: 400});
				}
				else {
					if (result.length !== 0) {
						response.json(result);
					}
				}
			});
		}
	});

	app.post('/comment', function (request, response) {
		let commentContent = request.body.commentContent;
		let commentAuthorName = request.body.commentAuthorName;
		let commentCreateTime = new Date();
		let postId = request.body.postId;
		DB.addComment([commentContent, commentAuthorName, commentCreateTime, postId], function (error, result) {
			if (error) {
				response.json({code: 400});
			}
			else {
				response.json({code: 200});
			}
		});
	});
	app.delete('/comment', function (request, response) {
		let commentId = request.body.commentId;
		DB.deleteComment(commentId, function (error, result) {
			if (error) {
				response.json({code: 400});
			}
			else {
				response.json({code: 200});
			}
		});
	});
	app.put('/comment', function (request, response) {
		let commentContent = request.body.commentContent;
		let commentCreateTime = new Date();
		let commentId = request.body.commentId;
		DB.updateComment([commentContent, commentCreateTime, commentId], function (error, result) {
			if (error) {
				response.json({code: 400});
			}
			else {
				response.json({code: 200});
			}
		});
	});
	app.get('/comment', function (request, response) {
		let postId = request.query.postId;
		DB.queryComment(postId, function (error, result) {
			if (error) {
				response.json({code: 400});
			}
			else {
				if (result.length !== 0) {
					response.json(result);
				}
			}
		});
	});
	app.get('/userCommentList', function (request, response) {
		if (request.session.user == null) {
			response.redirect('/login');
		}
		else {
			let authorName = request.session.user.username;
			DB.queryCommentByUsername(authorName, function (error, result) {
				if (error) {
					response.json({code: 400});
				}
				else {
					if (result.length !== 0) {
						response.json(result);
					}
				}
			});
		}
	});
	
};
