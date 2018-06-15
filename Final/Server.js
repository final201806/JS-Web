var http = require('http');
var express = require('express');
var socketIo = require("socket.io");
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var ejs = require('ejs');
var session = require('express-session');

var qs = require('querystring');
var fs = require('fs');
var url = require('url');

var module1 = require('./Server/modules/module1');

var app = express();

app.set('port', 8080);
app.set('views', __dirname + '/Server/views');
app.engine('html', ejs.__express);
app.set('view engine', 'html');
app.use(bodyParser.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({
		secret: 'test',
		proxy: true,
		resave: true,
		saveUninitialized: false,
		cookie: {maxAge: 600000}
	})
);
// app.use(function (request, response, next) {
// 	console.log(1);
// 	console.log(request.session.user);
// 	if (!request.session.user) {
// 		if (request.url == '/login') {
// 			console.log(2);
// 			next();
// 		}
// 		else {
// 			response.redirect('/login');
// 			console.log(3);
// 			// next();
// 		}
// 	}
// 	else if (req.session.user) {
// 		console.log(4);
// 		next();
// 	}
// });

//router
require('./Server/Routes')(app);


var server = http.createServer(app).listen(app.get('port'), function () {
	console.log('Express server listening on port ' + app.get('port'));
});


//聊天室
var io = new socketIo(server);

io.on("connection", function (clientSocket) {
	// socket.io 使用 emit(eventname,data) 发送消息，使用on(eventname,callback)监听消息

	for (let i = 0; i < 10; i++) {
		clientSocket.emit("receiveMsg", {client: "Manager" + i, msg: "test"});
	}

	//监听客户端发送的 sendMsg 事件
	clientSocket.on("sendMsg", function (data) {
		// data 为客户端发送的消息，可以是 字符串，json对象或buffer

		// 使用 emit 发送消息，broadcast 表示 除自己以外的所有已连接的socket客户端。
		clientSocket.broadcast.emit("receiveMsg", data);
	})
});