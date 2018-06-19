let DB = require('./modules/db');

// console.log(DB.Test())

module.exports = function (app) {
	app.get('/index', function (request, response) {
		response.render('index');
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

					response.redirect('index');
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
};

let callback = function (error, result) {
	if (error) {
		console.log('Error:' + error);
	}
	else {
		console.log(result);
	}
};