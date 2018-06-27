let DB = require('./modules/db');

module.exports = app => {
	app.get('/test', function (request, response) {
		let id = request.query.id;
		response.render('test', {message: id});
	});

	//视图相关
	app.get('', function (request, response) {
		response.render('index', request);
	});
	app.get('/index', function (request, response) {
		response.render('index', request);
	});
	app.get('/heroes', function (request, response) {
		response.render('heroes');
	});
	app.get('/heroDetail', function (request, response) {
		let id = request.query.id;
		response.render('heroDetail', {message: id});
    });
    app.get('/mheroDetail',function (request, response) {
        let id=request.query.id;
        response.render('mheroDetail', {message: id});
    });
    app.get('/zheroDetail',function (request, response) {
        let id=request.query.id;
        response.render('zheroDetail', {message: id});
    });
	app.get('/items', function (request, response) {
		response.render('items');
	});
	app.get("/chat", function (request, response) {
		// console.log(request.session.user)
		response.render('chat');
	});
	app.get("/login", function (request, response) {
		response.render('login');
	});
	app.get('/postDetail', function (request, response) {
		let id = request.query.id;
		DB.countComments(id, function (error, result) {
			if (error) {
				console.log('Error:' + error);
			}
			else {
				let pageNumber = Math.ceil(result[0].number / 5);
				response.render('postDetail', {message: id, pageNumber: pageNumber});
			}
		});
	});
	app.get('/register', function (request, response) {
		response.render('register');
	});
	app.get('/forum', function (request, response) {
		let pageId = request.query.pageId || 1;
		DB.countPosts(function (error, result) {
			if (error) {
				console.log('Error:' + error);
			}
			else {
				let pageNumber = Math.ceil(result[0].number / 5);
				response.render('post', {message: pageId, pageNumber: pageNumber});
			}
		});
	});
	app.get('/userHome', function (request, response) {
		let username = request.query.username;
		response.render('userHome', {message: username});
	});


	//登录相关
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
					response.cookie("user", {username: username}, {maxAge: 600000, httpOnly: false});
					//设置session
					request.session.user = {username: username};

					response.render('index', {message: username});

				} else {
					request.error = '用户名密码错误';
					response.render('login', request);
				}
			}
		});

	});
	app.get('/logout', function (request, response) {
		request.session.user = null;
		response.clearCookie('user');

		response.redirect('/index');
	});


	//注册相关
	app.post('/register', function (request, response) {
		let username = request.body.username;
		let pwd = request.body.pwd;
		DB.addUser([username, pwd], function (error, result) {
			if (error || result === null) {
				response.json({code: 400});
			}
			else {
				response.render('login');
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


	//用户主页相关
	app.get('/userDetail', function (request, response) {
		let username = request.query.username;
		DB.queryUser(username, function (error, result) {
			if (error) {
				console.log(error);
				response.json({code: 400});
			}
			else {
				response.json(result);
			}
		});
	});


	//post相关
	app.post('/post', function (request, response) {
		let postTitle = request.body.postTitle;
		let postContent = request.body.postContent;
		let postAuthorName = request.body.postAuthorName;
		let postCreateTime = new Date();
		DB.addPost([postTitle, postContent, postAuthorName, postCreateTime], function (error, result) {
			if (error) {
				console.log(error);
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
				response.redirect('/forum')
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
				if (result.length !== 0) {
					// response.json(result[0]);
					response.json(result[0]);
				}
			}
		});
	});
	app.get('/postList', function (request, response) {
		let pageId = request.query.pageId || 1;
		DB.queryPostList(pageId, function (error, result) {
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
		let authorName = request.query.username;
		DB.queryPostByUsername(authorName, function (error, result) {
			if (error || result == null) {
				response.json({code: 400});
			}
			else {
				if (result.length !== 0) {
					response.json(result);
				}
				else {
					response.json({code: 400});
				}
			}
		});
	});


	//comment相关
	app.post('/comment', function (request, response) {
		let commentContent = request.body.commentContent;
		let commentAuthorName = request.body.commentAuthorName;
		let commentCreateTime = new Date();
		let postId = request.body.postId;
		DB.addComment([commentContent, commentAuthorName, commentCreateTime, postId], function (error, result) {
			if (error) {
				console.log(error);
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
				console.log(error);
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
		let pageId = request.query.pageId || 1;
		DB.queryComment([postId, (pageId - 1) * 5], function (error, result) {
			if (error) {
				response.json({code: 400});
			}
			else {
				if (result.length !== 0) {
					response.json(result);
				}
				else {
					response.json({code: 400});
				}
			}
		});
	});
	app.get('/userCommentList', function (request, response) {
		let authorName = request.query.username;
		DB.queryCommentByUsername(authorName, function (error, result) {
			if (error || result == null) {
				response.json({code: 400});
			}
			else {
				if (result.length !== 0) {
					response.json(result);
				}
				else {
					response.json({code: 400});
				}
			}
		});
	});

};
