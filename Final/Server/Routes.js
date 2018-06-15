module.exports = function (app) {
	app.get('/index', function (request, response) {
		response.render('index');
	});
	app.get("/chat", function (request, response, next) {
		if (request.session.user == null) {
			response.redirect('/login');
		}
		else {
			response.render('chat');
		}

	});
	app.get("/login", function (request, response, next) {
		response.render('login');
	});
	app.post("/check", function (request, response, next) {
		console.log(request.body);
		var username = request.body.username;
		var pwd = request.body.pwd;
		var dbUser = {
			username: 'admin',
			pwd: 123456
		}
		if (username == dbUser.username && pwd == dbUser.pwd) {
			//设置cookie
			response.cookie("user", {username: username}, {maxAge: 600000 , httpOnly: false});
			//设置session
			var user = {'username': username};
			request.session.user = user;
			console.log(request.session.user);

			response.redirect('index');
			// response.redirect('index');
		} else {
			request.error = '用户名密码错误'
			response.render('login', request);
		}
	});
	app.get('/logout',function(request,response){

		request.session.user = null;
		response.clearCookie('user');

		response.redirect('/login');
	});
};